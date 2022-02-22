import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { EventType } from '../config/types';
import { useRouter } from 'next/router';
import { fetchEvent } from '../functions/apiCalls';
import { AiTwotoneCalendar as IcDate } from 'react-icons/ai';
import { ImLocation as IcLocation } from 'react-icons/im';
import Detail from '../components/ViewEventComponents/Detail';
import Description from '../components/ViewEventComponents/Creator';
import Comments from '../components/ViewEventComponents/Comments';
import Guests from '../components/ViewEventComponents/Guests';
import Location from '../components/ViewEventComponents/Location';
import Spinner from '../components/ViewEventComponents/Spinner';
import ViewEventSkeleton from '../components/UIComponents/ViewEventSkeleton';
import { motion, Variants } from 'framer-motion';

const ViewEventDetails: NextPage = () => {
	const [data, setData] = useState<EventType | null>(null);
	const { query } = useRouter();

	/**
	 * FETCH EVENT DETAILS ON COMPONENT MOUNT
	 */
	useEffect(() => {
		const getEvents = async () => {
			try {
				setData(null);
				const id = query.eventID as string;
				const newEvents = await fetchEvent(parseInt(id));
				setData(newEvents);
			} catch (e: any) {
				alert(e.message);
				// Handle error here
			}
		};

		if (query.eventID) getEvents();
	}, [query.eventID]);

	/**
	 * UI
	 */
	if (!data) return <ViewEventSkeleton />;
	return (
		<div className='viewEventDetails'>
			<div className='section left'>
				<motion.div variants={variantsLeft} initial='initial' animate='animate' className='content'>
					<h1>{data.title}</h1>
					<div className='details'>
						<Detail icon={<IcDate />} label={new Date(data.time).toLocaleDateString()} />
						<Detail icon={<IcLocation />} label={data.location.name} />
					</div>
					<Location lat={data.location.latitude} lng={data.location.longitude} />
				</motion.div>
			</div>
			<div className='section right'>
				<motion.div variants={variantsRight} initial='initial' animate='animate' className='content'>
					<Description {...data.creator} type={data.type} />
					<Comments data={data.comments} />
					<Guests data={data.guests} />
				</motion.div>
			</div>

			{/* STYLE */}
			<style jsx>{`
				:global(header) {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
					z-index: 3;
				}

				h1 {
					color: #fff;
				}

				.details {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					gap: 20px;
					padding: 20px 0;
				}

				.viewEventDetails {
					display: flex;
				}

				.section {
					flex-shrink: 0;
					flex-basis: 45%;
					padding: 100px 20px;
				}

				.section :global(.content) {
					max-width: 500px;
					margin: auto;
				}

				.section.right {
					background: #fff;
					min-height: 100vh;
					flex-grow: 1;
				}

				.section.right :global(.content) {
					max-width: 700px;
				}

				@media screen and (max-width: 900px) {
					.viewEventDetails {
						flex-direction: column;
					}
					.section.left {
						padding-bottom: 50px;
					}
					.section.right {
						padding-top: 30px;
					}
				}
			`}</style>
		</div>
	);
};

export default ViewEventDetails;

const variantsLeft: Variants = {
	initial: { y: -170, opacity: 0 },
	animate: { y: 1, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }
};

const variantsRight: Variants = {
	...variantsLeft,
	initial: { y: 170, opacity: 0 }
};

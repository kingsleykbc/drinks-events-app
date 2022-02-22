import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import EventList from '../components/IndexComponents/EventList';
import FilterBar from '../components/IndexComponents/FilterBar';
import Jumbotron from '../components/IndexComponents/Jumbotron';
import { fetchEvents } from '../functions/apiCalls';
import { motion, Variants } from 'framer-motion';
import { EventListItemType } from '../config/types';

const Home: NextPage = () => {
	const [filters, setFilters] = useState({ keyword: '', type: '' });
	const [events, setEvents] = useState<EventListItemType[] | null>(null);

	/**
	 * FETCH EVENTS ON COMPONENT MOUNT
	 */
	useEffect(() => {
		getEvents();
	}, []);

	/**
	 * FETCH EVENTS AND UPDATE STATE
	 */
	const getEvents = async () => {
		try {
			setEvents(null);
			const newEvents = await fetchEvents(filters.keyword, filters.type);
			setEvents(newEvents);
		} catch (e: any) {
			alert(e.message);
			// Handle error here
		}
	};

	/**
	 * UI
	 */
	return (
		<div className='index'>
			<Jumbotron />
			<motion.div variants={variants} initial='initial' animate='animate'>
				<div className='content'>
					<FilterBar values={filters} onChange={newFilters => setFilters(newFilters)} onFind={getEvents} />

					<h2>The easiest way to meet your friends</h2>
					<EventList events={events} />
				</div>
			</motion.div>

			{/* STYLE */}
			<style jsx>{`
				.index {
					padding: 0 20px;
				}

				.content {
					background: #fff;
					min-height: 400px;
					border-top-left-radius: 10px;
					border-top-right-radius: 10px;
					position: relative;
					padding: 20px;
					text-align: center;
					padding-bottom: 100px;
				}

				h2 {
					font-weight: normal;
					color: var(--lightTextColor);
					padding-top: 80px;
					padding-bottom: 50px;
				}

				@media screen and (max-width: 800px) {
					.index {
						padding: 0;
					}

					h2 {
						padding-top: 40px;
						padding-bottom: 50px;
					}
				}
			`}</style>
		</div>
	);
};

export default Home;

const variants: Variants = {
	initial: { y: 40, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { duration: 0.35, type: 'tween', ease: 'easeOut' } }
};

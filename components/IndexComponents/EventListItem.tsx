import React, { FC } from 'react';
import { EventListItemType } from '../../config/types';
import { BiChevronRightCircle as IcGo } from 'react-icons/bi';
import { AiTwotoneCalendar as IcDate } from 'react-icons/ai';
import Link from 'next/link';
import { DRINK_TYPE_IMAGES } from '../../config/config';

type PropTypes = {
	data: EventListItemType;
};

const EventListItem: FC<PropTypes> = props => {
	const { data } = props;
	return (
		<Link href={`/${data.id}`}>
			<a className='EventListItem'>
				<div className='image'>
					<img src={DRINK_TYPE_IMAGES[data.type].image} alt='image' />
				</div>
				<div className='details'>
					<div className='data'>
						<h3>{data.title}</h3>
						<div className='date'>
							<IcDate />
							<div>{new Date(data.time).toLocaleDateString()}</div>
						</div>
					</div>

					<IcGo />
				</div>

				{/* STYLE */}
				<style jsx>{`
					.EventListItem {
						background: ${DRINK_TYPE_IMAGES[data.type].bgColor};
						border-radius: 20px;
						flex-grow: 1;
						flex-shrink: 0;
						max-width: 340px;
						min-width: 300px;
						flex-basis: 20%;
						box-shadow: 0 3px 10px rgba(28, 28, 48, 0.07);
						cursor: pointer;
						transition: transform 0.2s ease-out;
					}

					.EventListItem:hover {
						transform: scale(1.06);
					}

					img {
						width: 100%;
						object-fit: contain;
						height: 150px;
					}
					.details {
						text-align: left;
						background: #fff;
						border-radius: 20px;
						box-shadow: 0 -2px 5px rgba(35, 35, 63, 0.1);
						padding: 12px;
					}
					h3 {
						font-size: 1rem;
					}

					.details,
					.date {
						display: flex;
						align-items: center;
					}
					.details {
						justify-content: space-between;
					}

					.details :global(svg) {
						font-size: 1.6rem;
					}

					.date {
						margin-top: 10px;
						font-size: 0.9rem;
						opacity: 0.5;
					}
					.date :global(svg) {
						font-size: 1rem;
						margin-right: 10px;
					}

					@media screen and (max-width: 400px) {
						.EventListItem {
							min-width: 100%;
						}
					}
				`}</style>
			</a>
		</Link>
	);
};

export default EventListItem;

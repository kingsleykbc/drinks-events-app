import React, { FC } from 'react';
import { useEffect, useState } from 'react';
import { EventListItemType, EventType } from '../../config/types';
import { fetchEvents } from '../../functions/apiCalls';
import EventsListSkeleton from '../UIComponents/EventsListSkeleton';
import { MdNoDrinks as IcNoDrinks } from 'react-icons/md';
import EventListItem from './EventListItem';
type PropTypes = {
	events: EventListItemType[] | null;
};

const EventList: FC<PropTypes> = props => {
	const { events } = props;

	if (!events) return <EventsListSkeleton />;
	if (events.length === 0) return <NoData />;
	return (
		<div className='EventList'>
			{events.map(item => (
				<EventListItem key={item.id} data={item} />
			))}

			{/* STYLE */}
			<style jsx>{`
				.EventList {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 20px;
				}
			`}</style>
		</div>
	);
};

export default EventList;

/**
 * NO DATA VIEW
 */
const NoData = () => {
	return (
		<div className='NoData'>
			<div className='icon'>
				<IcNoDrinks />
			</div>

			<h3>No events found</h3>
			<p>Try adjusting your search keywords</p>

			{/* STYLE */}
			<style jsx>{`
				.NoData {
					padding: 40px 0;
					border: 2px dashed #cfcfcf;
					border-radius: 5px;
				}

				.icon {
					font-size: 4.5rem;
					opacity: 0.4;
				}

				h3 {
					font-weight: normal;
					font-size: 1.5rem;
					margin-top: 10px;
					margin-bottom: 20px;
				}

				p {
					color: var(--lightTextColor);
				}
			`}</style>
		</div>
	);
};

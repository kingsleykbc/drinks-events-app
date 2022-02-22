import React from 'react';

const EventsListSkeleton = () => {
	return (
		<div>
			<EventSkeleton />
			<EventSkeleton />
			<EventSkeleton />
			<EventSkeleton />
			<EventSkeleton />
			<EventSkeleton />
			<EventSkeleton />
			<EventSkeleton />

			{/* STYLE */}
			<style jsx>{`
				div {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					gap: 20px;
				}
			`}</style>
		</div>
	);
};

export default EventsListSkeleton;

const EventSkeleton = () => {
	return (
		<div className='EventSkeleton skeleton'>
			<div className='details'>
				<span></span>
				<span></span>
			</div>
			{/* STYLE */}
			<style jsx>{`
				.EventSkeleton {
					border-radius: 10px;
					height: 200px;
					flex-basis: 22%;
					background: rgb(204, 204, 204);
					position: relative;
					min-width: 300px;
				}
				.details {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					padding: 20px;
					border-radius: 10px;
					background: #fff;
				}
				span {
					display: block;
					height: 10px;
					background: #cccccc;
					border-radius: 15px;
				}

				span:nth-child(2) {
					margin-top: 10px;
					max-width: 150px;
				}

				@media screen and (max-width: 800px) {
					.EventSkeleton {
						flex-grow: 1;
					}
				}
			`}</style>
		</div>
	);
};

import React, { FC } from 'react';
import { UserType } from '../../config/types';

const Guests: FC<{ data: UserType[] }> = ({ data }) => {
	return (
		<div>
			<h3>Guests</h3>
			<div className='guests'>
				{data.map((item, index) => (
					<div key={`guest_${index}`} className='guest'>
						<img src={item.avatarUrl} alt='avatar' />
						<span>{item.name}</span>
					</div>
				))}
			</div>

			{/* STYLE */}
			<style jsx>{`
				.guests {
					padding: 20px 0;
				}

				.guest {
					margin-bottom: 15px;
					border: 2px solid #d1d1d1;
					display: inline-flex;
					gap: 15px;
					align-items: center;
					border-radius: 35px;
					padding: 5px;
					padding-right: 20px;
					margin-right: 10px;
				}

				.guest span {
					font-weight: bold;
				}

				img {
					width: 40px;
					height: 40px;
					display: inline-block;
					background: #c0c0c0;
					border-radius: 50%;
					overflow: hidden;
				}
			`}</style>
		</div>
	);
};

export default Guests;

import React, { FC } from 'react';
import { DRINK_TYPE_IMAGES } from '../../config/config';
import { UserType } from '../../config/types';

const Creator: FC<UserType & { type: 'BEERS' | 'COCKTAILS' | 'COFFEES' | 'MILKSHAKES' }> = ({ name, type }) => {
	return (
		<div className='Creator'>
			{/* <img src={avatarUrl} alt="Avatar"/> AVATAR IMAGE UNAVAILABLE */}
			<img src={DRINK_TYPE_IMAGES[type].image} alt='Avatar' />
			<div className='details'>
				<h3>{type} EVENT</h3>
				<p>by {name}</p>
			</div>


			{/* STYLE */}
			<style jsx>{`
				.Creator {
					display: flex;
					align-items: center;
					gap: 20px;
				}

				img {
					width: 100px;
					border-radius: 5px;
					box-shadow: 0 3px 5px rgba(0,0,0,0.15);
				}

				p {
					margin-top: 5px;
				}
			`}</style>
		</div>
	);
};

export default Creator;

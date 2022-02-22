import React, { FC } from 'react';

const Detail: FC<{ icon: any; label: string }> = ({ icon, label }) => {
	return (
		<div className='Detail'>
			{icon}
			<span>{label}</span>

			{/* STYLE */}
			<style jsx>{`
				.Detail {
					display:flex;
					align-items:center;
					gap: 10px;
					color: #fff;
					font-weight: bold;
					opacity: 0.6;
				}

				.Detail:global(svg) {
					font-size: 1.7rem;
				}
			`}</style>
		</div>
	);
};

export default Detail;

import React from 'react';
import { motion } from 'framer-motion';

const Jumbotron = () => {
	return (
		<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{duration:0.4}}>
			<div className='Jumbotron'>
				<img src='/images/drinks-text.png' alt='Jumbotron image' />
				<img src='/images/beer-icon-stroke.png' alt='Jumbotron image' />
			</div>

			{/* STYLE */}
			<style jsx>{`
				.Jumbotron {
					display: flex;
					justify-content: center;
					gap: 15px;
					padding: 20px;
					padding-top: 10vh;
					padding-bottom: 160px;
				}

				img {
					max-width: 90%;
					height: 150px;
					flex-shrink: 0;
					flex-basis: 0;
					filter: brightness(10%);
				}

				img:first-child {
					opacity: 0.7;
				}

				@media screen and (max-width: 700px) {
					.Jumbotron {
						padding-top: 6vh;
						padding-bottom: 60px;
					}
					img {
						height: 100px;
					}
				}
			`}</style>
		</motion.div>
	);
};

export default Jumbotron;

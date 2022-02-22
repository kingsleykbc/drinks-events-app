import React from 'react';

const ViewEventSkeleton = () => {
	return (
		<div className='viewEventSkeleton'>
			<div className='section left'>
				<div className='content'>
					<div className='skeleton top'></div>
					<div className='skeleton bottom'></div>
				</div>
			</div>
			<div className='section right'>
				<div className='content'>
					<div className='skeleton top'></div>
					<div style={{ margin: '20px 0' }} className='skeleton top'></div>
					<div className='skeleton top'></div>
				</div>
			</div>

			{/* STYLE */}
			<style jsx>{`
				:global(header) {
					position: fixed;
					top: 0;
					left: 0;
					width: 100%;
          z-index: 2;
				}

				.viewEventSkeleton {
					display: flex;
				}

				.section {
					flex-shrink: 0;
					flex-basis: 45%;
					padding: 100px 20px;
				}

				.section .content {
					max-width: 500px;
					margin: auto;
				}

				.section.right {
					background: #fff;
					min-height: 100vh;
					flex-grow: 1;
				}

				.section.right .content {
					max-width: 700px;
				}

				.top,
				.bottom {
					height: 100px;
					width: 100%;
					background: rgba(0, 0, 0, 0.342);
				}

				.bottom {
					margin-top: 30px;
					height: 300px;
				}

				.right .skeleton {
					background: rgb(216, 216, 216);
				}

				@media screen and (max-width: 900px) {
					.viewEventSkeleton {
						flex-direction: column;
					}

					.section {
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

export default ViewEventSkeleton;

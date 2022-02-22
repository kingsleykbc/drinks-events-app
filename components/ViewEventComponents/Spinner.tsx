const Spinner = () => {
	return (
		<div>
			{/* STYLE */}
			<style jsx>{`
				div {
					width: 80px;
					height: 80px;
					border-radius: 50%;
					border: 5px solid #fff;
					border-bottom-color: transparent;
					animation: spinner 1s linear infinite;
					position: absolute;
					left: 50%;
					top: 40%;
					margin-left: -40px;
				}

				@keyframes spinner {
					to {
						transform: rotate(1turn);
					}
				}
			`}</style>
		</div>
	);
};

export default Spinner;

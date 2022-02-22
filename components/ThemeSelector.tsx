import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = () => {
	const { themeColor, setThemeColor } = useTheme();

	/**
	 * UI
	 */
	return (
		<div className='ThemeSelector'>
			<div className='themeButton'>
				<div className={`themeCircle c${themeColor?.substring(1)}`}></div>
			</div>
			<div className='options'>
				{['#DBB561', '#E5CB90', '#5DAB7C', '#4C3800', '#BB6B62']
					.filter(item => item != themeColor)
					.map(item => (
						<div
							key={item}
							onClick={() => {
								if (setThemeColor) setThemeColor(item);
							}}
							className={`themeCircle c${item.substring(1)}`}
						></div>
					))}
			</div>

			{/* STYLE */}
			<style jsx>{`
				.ThemeSelector {
					position: relative;
				}

				.themeButton {
					width: 40px;
					height: 40px;
					background: #fff;
					border-radius: 50px;
					box-shadow: var(--boxShadow);
					cursor: pointer;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.themeCircle {
					width: 25px;
					height: 25px;
					box-shadow: var(--boxShadow);
					border-radius: 50%;
					cursor: pointer;
				}

				.options {
					position: absolute;
					z-index: 2;
					top: 100%;
					left: 0;
					background: #fff;
					text-align: center;
					padding: 10px;
					border-radius: 20px;
					box-shadow: var(--boxShadow);
					display: none;
				}

				.options .themeCircle {
					margin-bottom: 10px;
				}

				.options .themeCircle:last-child {
					margin: 0;
				}

				.ThemeSelector:hover .options {
					display: block;
				}

				.cDBB561 {
					background: #dbb561;
				}
				.cE5CB90 {
					background: #e5cb90;
				}
				.c5DAB7C {
					background: #5dab7c;
				}
				.c4C3800 {
					background: #4c3800;
				}
				.cBB6B62 {
					background: #bb6b62;
				}
			`}</style>
		</div>
	);
};

export default ThemeSelector;

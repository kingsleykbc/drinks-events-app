import React, { FC } from 'react';
import { BiSearchAlt2 as IcSearch } from 'react-icons/bi';
import { BiDrink as IcDrink } from 'react-icons/bi';
import { DRINK_TYPES } from '../../config/config';
import { motion, Variants } from 'framer-motion';

type FiltersType = { keyword: string; type: string };
type PropTypes = {
	values: FiltersType;
	onChange: (newFilters: FiltersType) => void;
	onFind: Function;
};

const FilterBar: FC<PropTypes> = props => {
	const { values, onChange, onFind } = props;

	/**
	 * HANDLE FILTER CHANGE
	 */
	const handleChange = (e: any) => {
		const newFilters: FiltersType = { ...values };
		const name = e.target.name as 'keyword' | 'type';
		newFilters[name] = e.target.value;
		onChange(newFilters);
	};

	/**
	 * UPDATE SEARCH
	 */
	const handleSearch = (e: any) => {
		e.preventDefault();
		onFind();
	};

	/**
	 * UI
	 */
	return (
		<motion.div variants={variants} initial='initial' animate='animate'>
			<form onSubmit={handleSearch} className='FilterBar'>
				<div className='input'>
					<IcSearch />
					<input
						type='search'
						value={values.keyword}
						name='keyword'
						onChange={handleChange}
						placeholder='Search events (by title, creator, or location)'
					/>
				</div>

				<div className='input'>
					<IcDrink />
					<select name='type' value={values.type} onChange={handleChange}>
						<option value=''>All categories</option>
						{DRINK_TYPES.map(item => (
							<option key={item}>{item}</option>
						))}
					</select>
				</div>

				<button>Find</button>
			</form>

			{/* STYLE */}
			<style jsx>{`
				.FilterBar {
					display: flex;
					align-items: center;
					gap: 12px;
					box-shadow: 0 3px 10px rgba(0, 0, 0, 0.171);
					padding: 0 15px;
					border-radius: 50px;
					background: #fff;
					position: absolute;
					top: -36px;
					width: 100%;
					left: 0;
					right: 0;
					margin: auto;
					max-width: 1200px;
				}

				.input {
					flex-grow: 1;
					display: flex;
					align-items: center;
					padding-left: 10px;
				}

				.input:first-child {
					border-right: var(--border);
				}

				.input :global(svg) {
					font-size: 2rem;
				}

				input,
				select {
					flex-grow: 1;
					margin-left: 15px;
					padding: 25px;
					font-size: 1.2rem;
					border: none;
					background: #fff;
					outline: none;
					width: 100%;
				}

				select {
					cursor: pointer;
				}

				button {
					padding: 15px 35px;
				}

				@media screen and (max-width: 800px) {
					.FilterBar {
						flex-direction: column;
						border-radius: 10px;
						align-items: stretch;
						position: static;
						padding-bottom: 15px;
					}

					.input:first-child {
						border: none;
						border-bottom: var(--border);
					}
				}
			`}</style>
		</motion.div>
	);
};

export default FilterBar;

const variants: Variants = {
	initial: { y: 60, opacity: 0 },
	animate: { y: 0, opacity: 1, transition: { duration: 0.3, type: 'tween', delay: 0.3 } }
};

import React, { useState } from 'react';
import SingleColor from './SingleColor';

import { FaRandom, FaSearch } from 'react-icons/fa';

import Values from 'values.js';

const App = () => {
	const [color, setColor] = useState('');
	const [no, setNo] = useState('');
	// const [error, setError] = useState(false);
	const [colorList, setColorList] = useState(new Values('#451017').all(10));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let number = 10;
			if (no) {
				number = parseInt(no);
			}
			const colorList = new Values(color).all(number);
			setColorList(colorList);
			setColor('');
		} catch (error) {
			// setError(true);
			console.log(error);
		}
	};

	const handleRandom = () => {
		const randomHex = [...Array(6)]
			.map(() => Math.floor(Math.random() * 16).toString(16))
			.join('');
		const hexCode = `#${randomHex}`;
		const colorList = new Values(hexCode).all(10);
		setColorList(colorList);
	};

	return (
		<main>
			<div className="title">
				<h2>Color Shades/Tints Generator</h2>
				<div className="hr-line"></div>
			</div>
			<div className="nav-header">
				<div className="left-area">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="color"
							value={color}
							placeholder="Enter Hex code... (e.g. #fff)"
							onChange={(e) => setColor(e.target.value)}
						/>
						<input
							type="number"
							name="no"
							value={no}
							placeholder="10%"
							onChange={(e) => setNo(e.target.value)}
						/>
						<button type="submit" className="icon-btn">
							<FaSearch />
						</button>
					</form>
				</div>
				<div className="right-area">
					<button onClick={handleRandom} className="icon-btn">
						<FaRandom />
					</button>
				</div>
			</div>

			<div className="colorlist-area">
				{colorList.map((singleColor, index) => {
					return (
						<SingleColor
							key={index}
							{...singleColor}
							hex={singleColor.hex}
							index={index}
							colorListLength={colorList.length}
						/>
					);
				})}
			</div>
		</main>
	);
};

export default App;

import React, { useState, useEffect } from "react";

import { MdOutlineContentCopy } from "react-icons/md";

const SingleColor = ({ rgb, hex, weight, index, colorListLength }) => {
	const [copied, setCopied] = useState(false);
	const validRgb = rgb.join(",");
	const hexCode = `#${hex}`;

	useEffect(() => {
		const thistime = setTimeout(() => {
			setCopied(false);
		}, 3000);
		return () => {
			clearTimeout(thistime);
		};
	}, [copied]);

	const copyHex = () => {
		setCopied(true);
		navigator.clipboard.writeText(hexCode);
	};
	return (
		<div
			className="color-container"
			style={{
				backgroundColor: `rgb(${validRgb})`,
				color: `${index > colorListLength / 2 ? "red" : null}`,
			}}
			onClick={copyHex}
		>
			<h4>{hexCode}</h4>
			<p>{weight}%</p>
			{!copied ? (
				<button className="btn" style={{ color: hexCode }} onClick={copyHex}>
					Copy <MdOutlineContentCopy />
				</button>
			) : (
				<p className="copied" style={{ color: hexCode }}>
					Copied!!!
				</p>
			)}
		</div>
	);
};

export default SingleColor;

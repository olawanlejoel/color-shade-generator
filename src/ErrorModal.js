import React from 'react';

const ErrorModal = ({ closeModal }) => {
	return (
		<div className="errormain" onClick={closeModal}>
			<div className="modal">
				<h2>Error!!!</h2>
				<p>You Just entered a wrong Hex-code!</p>
				<button className="btn" onClick={closeModal}>
					Close
				</button>
			</div>
		</div>
	);
};

export default ErrorModal;

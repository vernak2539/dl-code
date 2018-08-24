import React from 'react';

const styles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	height: '100%'
};

const locationLabelStyles = {
	color: '#000',
	opacity: 0.5,
	fontSize: '16px'
};

const LocationStyles = {
	color: '#fff',
	fontSize: '34px'
};

export default ({ currentLocation }) => {
	return (
		<div className="logo-bg">
			<div className="section" style={styles}>
				<div>
					<div style={locationLabelStyles}>Location</div>
					<div style={LocationStyles}>{currentLocation}</div>
				</div>
				<div>
					<button className="btn">Change Location</button>
				</div>
			</div>
		</div>
	);
};

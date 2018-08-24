import React from 'react';

export default ({ currentLocation }) => (
	<div className="logo-bg">
		<div className="section location-container">
			<div>
				<div className="location-label">Location</div>
				<div className="current-location">{currentLocation || 'Loading...'}</div>
			</div>
			<div>
				<button className="btn">Change Location</button>
			</div>
		</div>
	</div>
);

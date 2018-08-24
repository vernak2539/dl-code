import React, { Component } from 'react';
import LogoContainer from './LogoContainer';
import LocationContainer from './LocationContainer';
import RestaurantsContainer from './RestaurantsContainer';
import '../styles/styles.css';

class App extends Component {
	render() {
		return (
			<div className="deliveroo-page">
				<LogoContainer />
				<LocationContainer />
				<RestaurantsContainer />
			</div>
		);
	}
}

export default App;

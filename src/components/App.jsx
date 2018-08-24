import React, { Component } from 'react';
import LogoContainer from './LogoContainer';
import LocationContainer from './LocationContainer';
import RestaurantsContainer from './RestaurantsContainer';
import '../styles/styles.css';
import fetchRestaurantInfo from '../services/restaurants';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			location: null,
			restaurants: []
		};
	}
	componentDidMount() {
		fetchRestaurantInfo().then(data => {
			this.setState({
				location: data.neighborhood,
				restaurants: data.restaurants
			});
		});
	}
	render() {
		return (
			<div className="deliveroo-page">
				<LogoContainer />
				<LocationContainer currentLocation={this.state.location} />
				<RestaurantsContainer restaurants={this.state.restaurants} />
			</div>
		);
	}
}

export default App;

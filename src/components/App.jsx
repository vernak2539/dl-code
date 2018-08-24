import "../styles/styles.css";
import fetchRestaurantInfo from "../services/restaurants";
import LocationContainer from "./LocationContainer";
import LogoContainer from "./LogoContainer";
import React, { Component } from "react";
import RestaurantsContainer from "./RestaurantsContainer";

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

import React from "react";
import Restaurant from "./Restaurant";

export default ({ restaurants }) => {
  if (!restaurants.length) {
    return (
      <div className="section">
        <div className="restaurant-count text-gray hide-when-small">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="restaurant-count text-gray hide-when-small">
        {restaurants.length} Restaurants
      </div>
      <ul className="restaurant-container">
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            <Restaurant {...restaurant} />
          </li>
        ))}
      </ul>
    </div>
  );
};

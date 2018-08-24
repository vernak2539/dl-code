import React from 'react';
import Restaurant from './Restaurant';

export default ({ restaurants }) => {
	if (!restaurants.length) {
		return <div className="section">Loading...</div>;
	}

	return (
		<div className="section">
			<div className="restaurant-count text-gray">{restaurants.length} Restaurants</div>
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

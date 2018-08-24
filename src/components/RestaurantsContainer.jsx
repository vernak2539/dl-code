import React from 'react';
import Restaurant from './Restaurant';

export default ({ restaurants }) => {
	if (!restaurants.length) {
		return <div className="section">Loading...</div>;
	}

	return (
		<div className="section">
			<div>{restaurants.length} Restaurants</div>
			{restaurants.map(restaurant => (
				<Restaurant key={restaurant.id} {...restaurant} />
			))}
		</div>
	);
};

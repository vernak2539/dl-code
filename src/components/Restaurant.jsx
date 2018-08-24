import React from 'react';

export default ({ name, tags, price, image }) => {
	const priceInPoundSymbols = '£'.repeat(price); // doesn't work in IE for the moment
	const categoriesAndPrice = [...tags, priceInPoundSymbols];

	const restaurantImageStyles = {
		backgroundImage: `url(${image})`
	};

	return (
		<div className="restaurant">
			<div className="restaurant-image" style={restaurantImageStyles} />
			<h2>{name}</h2>
			<div className="categories-price text-gray">{categoriesAndPrice.join(' • ')}</div>
		</div>
	);
};

import React from 'react';
import { shallow, render } from 'enzyme';
import RestaurantsContainer from '../RestaurantsContainer';

describe('Component > RestaurantsContainer', () => {
	it('should render correctly', () => {
		const restaurants = [
			{
				id: '63460',
				name: 'Burrito Kitchen',
				image:
					'https://f.roocdn.com/images/menus/25785/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1477308353',
				url: 'https://deliveroo.co.uk/menu/london/bank/burrito-kitchen-cheapside',
				price: 2,
				tags: ['Mexican', 'Burritos', 'Halal']
			},
			{
				id: '33406',
				name: 'Pure',
				image:
					'https://f.roocdn.com/images/menus/52101/header-image.jpg?width=360&height=200&auto=webp&format=jpg&fit=crop&v=1515776356',
				url: 'https://deliveroo.co.uk/menu/london/the-city/pure-gracechurch-st',
				price: 2,
				tags: ['Salads', 'Gluten Free', 'Smoothies']
			}
		];

		expect(shallow(<RestaurantsContainer restaurants={restaurants} />)).toMatchSnapshot();
	});

	it('should display loading if data is not present', () => {
		expect(shallow(<RestaurantsContainer restaurants={[]} />)).toMatchSnapshot();
	});
});

import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import fetchRestaurantInfo from '../../services/restaurants';

jest.mock('../../services/restaurants', () => jest.fn());

describe('Component > App', () => {
	it('should return restaurnant info object', async () => {
		const sampleResponse = {
			neighborhood: 'Fitzrovia',
			restaurants: [{ res: 1 }]
		};
		fetchRestaurantInfo.mockImplementation(() => Promise.resolve(sampleResponse));

		const wrapper = shallow(<App />);

		await wrapper.instance().componentDidMount();

		expect(wrapper.state('location')).toBe(sampleResponse.neighborhood);
		expect(wrapper.state('restaurants')).toBe(sampleResponse.restaurants);
	});
});

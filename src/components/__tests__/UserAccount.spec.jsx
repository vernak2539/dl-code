import React from 'react';
import { render } from 'enzyme';
import UserAccount from '../UserAccount';

describe('Component > User Account', () => {
	it('should render correctly', () => {
		expect(render(<UserAccount />)).toMatchSnapshot();
	});
});

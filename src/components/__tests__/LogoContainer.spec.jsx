import React from 'react';
import { shallow } from 'enzyme';
import LogoContainer from '../LogoContainer';

describe('Component > Logo Container', () => {
	it('should render correctly', () => {
		expect(shallow(<LogoContainer />)).toMatchSnapshot();
	});
});

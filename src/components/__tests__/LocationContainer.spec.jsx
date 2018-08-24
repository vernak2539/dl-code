import React from 'react';
import LocationContainer from '../LocationContainer';
import { render } from 'enzyme';

describe('Component > Location Container', () => {
	it('should render correctly', () => {
		expect(render(<LocationContainer />)).toMatchSnapshot();
	});
});

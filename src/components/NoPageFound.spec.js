import React from 'react';
import { shallow } from 'enzyme';
import NoPageFound from './NoPageFound';

describe('<NoPageFound />', () => {
    it('should have a pretty cool gif displayed', () => {
        const wrapper = shallow(<NoPageFound />);
        const actual = wrapper.find('img').prop('className');
        const expected = '404-image';
        expect(actual).toEqual(expected);
    });
});

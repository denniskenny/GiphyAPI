import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.jsx';

describe('<Header />', () => {
  it('should have a pretty cool gif displayed', () => {
    const wrapper = shallow(
      <Header
        headerOptions={{
          currentFilter: 'cute+puppies',
          disabled: false,
          offset: 0,
        }}
      />
    );
    const actual = wrapper.find('DropdownButton').prop('title');
    const expected = 'Puppies';
    expect(actual).toEqual(expected);
  });
});

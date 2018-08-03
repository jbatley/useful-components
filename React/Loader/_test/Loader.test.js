import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loader from '../index';

configure({ adapter: new Adapter() });

describe('<Loader  />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.length).toBe(1);
  });
});

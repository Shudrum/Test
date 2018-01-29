import React from 'react';
import { assert } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Rating from './Rating';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-env mocha */

describe('<Rating />', () => {
  it('should render 10 StarFull when the value is 10', () => {
    const wrapper = shallow(<Rating value={10} />);
    assert.lengthOf(wrapper.find(Rating.StarFull), 10);
  });
  it('should render 5 StarFull and 5 StarEmpty when the value is 5', () => {
    const wrapper = shallow(<Rating value={5} />);
    assert.lengthOf(wrapper.find(Rating.StarFull), 5);
    assert.lengthOf(wrapper.find(Rating.StarEmpty), 5);
  });
  it('should render 10 StarEmpty when the value is 0', () => {
    const wrapper = shallow(<Rating value={0} />);
    assert.lengthOf(wrapper.find(Rating.StarEmpty), 10);
  });
  it('should render 5 StarFull and 4 StarEmpty, and 1 StarSemi when the value is 5.6', () => {
    const wrapper = shallow(<Rating value={5.6} />);
    assert.lengthOf(wrapper.find(Rating.StarFull), 5);
    assert.lengthOf(wrapper.find(Rating.StarSemi), 1);
    assert.lengthOf(wrapper.find(Rating.StarEmpty), 4);
  });
});

import React from 'react';
import Ranking from '../pages/Ranking';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils';

const setUp = () => {
  const component = shallow(<Ranking />);
  return component;
}

describe("Ranking component", () => {
  // let component;
  // beforeEach(() => {
  //   component = setUp();
  // });

  it("Should render without crashing", () => {
    // const wrapper = findByTestAttr(component, 'ranking').childAt(0).dive();
    // expect(wrapper.length).toBe(1);
  });
});

import React from 'react';
import Ranking from '../pages/Ranking';
import {shallow} from 'enzyme'


describe("Testing <Ranking />", () => {
  it("Renders without crashing", () => {
    shallow(<Ranking />);
  });

  it("Renders page header", () => {
    const wrapper = shallow(<Ranking />);
    const ranking = <h2>Ranking</h2>;
    expect(wrapper.contains(ranking)).toEqual(true);
  });
});

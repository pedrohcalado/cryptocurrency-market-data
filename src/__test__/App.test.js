import React from 'react';
import App from '../App';
import {shallow} from 'enzyme'


describe("Testing <App />", () => {
  it("Renders without crashing", () => {
    shallow(<App />);
  });

  it("Renders page header", () => {
    const wrapper = shallow(<App />);
    const cripto = <h1>Cryptocurrency</h1>;
    expect(wrapper.contains(cripto)).toEqual(true);
  });
});

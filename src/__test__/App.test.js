import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../utils';

const setUp = () => {
  const component = shallow(<App />);
  return component;
}

describe("App component", () => {

  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without crashing", () => {
    const wrapper = findByTestAttr(component, 'app');
    expect(wrapper.length).toBe(1);
  });

  it("Should render page header", () => {
    const cripto = <h1>Cryptocurrency</h1>;
    expect(component.contains(cripto)).toEqual(true);
  });
});

import { shallow } from 'enzyme';
import React from 'react';
import TradeHistory from '../components/TradeHistory';
import { checkProps, findByTestAttr } from '../utils';

describe('Trade history component', () => {

  describe('Checking prop types', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        currencyPair: "USDC_BTC",
      };
      const propsErr = checkProps(TradeHistory, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Component renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        currencyPair: "USDC_BTC",
      };
      wrapper = shallow(<TradeHistory {...props} />);
    });

    it('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'tradeHistoryComponent');
      expect(component.length).toBe(1);
    })

    it('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'tradeHistoryTitle');
      expect(title.length).toBe(1);
    })
  })
});

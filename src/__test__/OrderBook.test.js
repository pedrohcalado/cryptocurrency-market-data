import React from 'react';
import OrderBook from '../components/OrderBook';
import { checkProps } from '../utils';

describe('Order book component', () => {

  describe('Checking prop types', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        currencyPair: "USDC_BTC",
      };
      const propsErr = checkProps(OrderBook, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});

import React from 'react';
import TradeHistory from '../components/TradeHistory';
import { checkProps } from '../utils';

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
});

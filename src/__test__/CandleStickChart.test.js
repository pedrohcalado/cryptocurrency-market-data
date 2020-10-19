import React from 'react';
import CandleStickChart from '../components/CandleStickChart';
import { checkProps } from '../utils';

describe('Candlestick chart component', () => {

  describe('Checking prop types', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        currencyPair: "USDC_BTC",
      };
      const propsErr = checkProps(CandleStickChart, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});

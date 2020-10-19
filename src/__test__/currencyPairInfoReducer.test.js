import { IS_REQUESTING, SAVE_CURRENCY_PAIR_INFO } from '../actions';
import currencyPairInfoReducer, { INITIAL_STATE } from '../reducers/currencyPairInfoReducer';

const payload = [
  ["BTC_BTS", {
    "id": 14,
    "last": "0.00000169",
    "lowestAsk": "0.00000171",
    "highestBid": "0.00000168",
    "percentChange": "-0.00588235",
    "baseVolume": "0.52008267",
    "quoteVolume": "306077.98970779",
    "isFrozen": "0",
    "high24hr": "0.00000175",
    "low24hr": "0.00000168"
  }],
  ["BTC_DASH", {
    "id": 24,
    "last": "0.00606769",
    "lowestAsk": "0.00609142",
    "highestBid": "0.00607937",
    "percentChange": "-0.01750542",
    "baseVolume": "1.36203197",
    "quoteVolume": "220.32810264",
    "isFrozen": "0",
    "high24hr": "0.00620000",
    "low24hr": "0.00603603"
  }],
];

describe('Currency pair info reducer', () => {

  it('Should return default state', () => {
    const newState = currencyPairInfoReducer(undefined, {});
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('Should return a new state if receiving a type SAVE_CURRENCY_PAIR_INFO', () => {
    const newState = currencyPairInfoReducer(undefined, {
      type: SAVE_CURRENCY_PAIR_INFO,
      payload,
    });
    expect(newState).toEqual({
      currencyPairInfo: payload,
      isLoading: false,
    });
  });

  it('Should return a new state if receiving a type IS_REQUESTING', () => {
    const newState = currencyPairInfoReducer(undefined, {
      type: IS_REQUESTING,
    });
    expect(newState).toEqual({
      currencyPairInfo: [],
      isLoading: true,
    });
  });
});

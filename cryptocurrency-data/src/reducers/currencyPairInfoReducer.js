import { IS_REQUESTING, SAVE_CURRENCY_PAIR_INFO } from '../actions';

const INITIAL_STATE = {
  currencyPairInfo: [],
  isLoading: false,
};

export default function currencyPairInfoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_CURRENCY_PAIR_INFO:
      return ({
        currencyPairInfo: action.payload,
        isLoading: false,
      });
    case IS_REQUESTING:
      return ({
        isLoading: true,
      })
    default:
      return state;
  }
}

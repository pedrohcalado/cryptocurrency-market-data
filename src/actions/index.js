import fetchCurrencyPairInfo from "../services/fetchCurrencyPairInfo";

export const SAVE_CURRENCY_PAIR_INFO = 'SAVE_CURRENCY_PAIR_INFO';
export const IS_REQUESTING = 'IS_REQUESTING';
export const SET_FILTER = 'SET_FILTER';
export const SET_FILTER_ORDER = 'SET_FILTER_ORDER';

export function currencyPairInfo() {
  return (dispatch) => {
    dispatch(isRequesting());
    return fetchCurrencyPairInfo()
      .then((data) => dispatch(saveCurrencyPairInfo(Object.entries(data))),
        (error) => console.log('fetchCurrencyPairInfo', error));
  }
}

const saveCurrencyPairInfo = (payload) => ({
  type: SAVE_CURRENCY_PAIR_INFO,
  payload,
});

const isRequesting = () => ({
  type: IS_REQUESTING,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const setFilterOrder = (order) => ({
  type: SET_FILTER_ORDER,
  order,
})

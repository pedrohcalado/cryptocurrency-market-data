import fetchCurrencyPairInfo from "../services/fetchCurrencyPairInfo";

export const SAVE_CURRENCY_PAIR_INFO = 'SAVE_CURRENCY_PAIR_INFO';
export const IS_REQUESTING = 'IS_REQUESTING';

export function currencyPairInfo() {
  return (dispatch) => {
    console.log('entrou')
    dispatch(isRequesting());
    return fetchCurrencyPairInfo()
      .then((data) => dispatch(saveCurrencyPairInfo(data)),
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

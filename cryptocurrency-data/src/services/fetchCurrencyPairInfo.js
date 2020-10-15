const URL = 'https://poloniex.com/public?command=returnTicker';

export default function fetchCurrencyPairInfo() {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data,
      (error) => console.log('fetchCurrencyPairInfo', error)
    );
}

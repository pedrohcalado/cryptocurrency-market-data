export default function fetchTradeHistory(currencyPair) {
  const URL = `https://poloniex.com/public?command=returnTradeHistory&currencyPair=${currencyPair}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data,
      (error) => console.log('fetchTradeHistory', error)
    );
}

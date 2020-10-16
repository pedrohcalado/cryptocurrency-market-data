export default function fetchOrderBook(currencyPair) {
  const URL = `https://poloniex.com/public?command=returnOrderBook&currencyPair=${currencyPair}`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data,
      (error) => console.log('fetchOrderBook', error)
    );
}

export default function fetchChartData(currencyPair) {
  const URL = `https://poloniex.com/public?command=returnChartData&currencyPair=${currencyPair}&start=1580566388&end=1583158388&period=14400`;

  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data,
      (error) => console.log('fetchChartData', error)
    );
}

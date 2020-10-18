import React, { useEffect, useState } from 'react';
import fetchOrderBook from '../services/fetchOrderBook';
import './OrderBook.css';

export default function OrderBook(props) {
  const { currencyPair } = props;
  const [orderBook, setOrderBook] = useState()
  useEffect(() => {
    fetchOrderBook(currencyPair).then((order) => setOrderBook(order));
  }, [currencyPair]);

  return (
    <div>
      <h3 className="ob-title">Order book</h3>
      <div className="table--ob-container">
        <table className="table-striped table-bordered table-sm">
          <thead>
            <tr>
              <td>Asks</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {orderBook && orderBook.asks.map(order =>
              <tr key={order[0]}>
                <td>{order[0]}</td>
                <td>{order[1]}</td>
              </tr>
            )}
          </tbody>
        </table>
        <table className="table-striped table-bordered table-sm">
          <thead>
            <tr>
              <td>Bid</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {orderBook && orderBook.bids.map(order =>
              <tr key={order[0]}>
                <td>{order[0]}</td>
                <td>{order[1]}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

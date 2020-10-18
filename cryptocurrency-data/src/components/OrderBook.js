import React, { useEffect, useState } from 'react';
import fetchOrderBook from '../services/fetchOrderBook';
import './OrderBook.css';

export default function OrderBook(props) {
  const { currencyPair } = props;
  const [orderBook, setOrderBook] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchOrderBook(currencyPair).then((order) => {
      setOrderBook(order);
      setIsLoading(false);
    });
  }, [currencyPair]);

  return (
    <div>
      <h3 className="ob-title">Order book</h3>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
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
                <td>Bids</td>
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
      }
    {(orderBook && orderBook.length === 0) && <p>No order found</p>}
    </div>
  );
}

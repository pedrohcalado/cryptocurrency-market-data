import React, { useEffect, useState } from 'react';
import fetchTradeHistory from '../services/fetchTradeHistory';
import './TradeHistory.css';

export default function TradeHistory(props) {
  const { currencyPair } = props;
  const [tradeHistory, setTradeHistory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchTradeHistory(currencyPair).then((trades) => {
      setTradeHistory(trades);
      setIsLoading(false);
    })
  }, [currencyPair]);

  return (
    <div>
      <h3 className="th-title">Trade history</h3>
      <p>Last 200 trades</p>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        <div className="th-table-container">
          <table className="table-striped table-bordered table-sm">
            <thead>
              <tr>
                <td>Global trade ID</td>
                <td>Trade ID</td>
                <td>Date</td>
                <td>Type</td>
                <td>Rate</td>
                <td>Amount</td>
                <td>Total</td>
                <td>Order number</td>
              </tr>
            </thead>
            <tbody>
              {tradeHistory && tradeHistory.map(trade =>
                <tr key={trade.tradeID}>
                  <td>{trade.globalTradeID}</td>
                  <td>{trade.tradeID}</td>
                  <td>{trade.date}</td>
                  <td>{trade.type}</td>
                  <td>{trade.rate}</td>
                  <td>{trade.amount}</td>
                  <td>{trade.total}</td>
                  <td>{trade.orderNumber}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      }
    {(tradeHistory && tradeHistory.length === 0) && <p>No trade found</p>}
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchTradeHistory from '../services/fetchTradeHistory';
import './TradeHistory.css';

export default function TradeHistory(props) {
  const { currencyPair } = props;
  const [tradeHistory, setTradeHistory] = useState();
  useEffect(() => {
    fetchTradeHistory(currencyPair).then((trades) => setTradeHistory(trades))
  }, [currencyPair])
  return (
    <div data-test="tradeHistoryComponent">
      <h3 className="th-title" data-test="tradeHistoryTitle">Trade history</h3>
      <div className="th-table-container">
        <table className="table-striped table-bordered table-sm">
          <thead>
            <tr>
              <td data-test="globalTradeID">Global trade ID</td>
              <td data-test="tradeID">Trade ID</td>
              <td data-test="date">Date</td>
              <td data-test="type">Type</td>
              <td data-test="rate">Rate</td>
              <td data-test="amount">Amount</td>
              <td data-test="total">Total</td>
              <td data-test="orderNumber">Order number</td>
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
    </div>
  );
}

TradeHistory.propTypes = {
  currencyPair: PropTypes.string.isRequired,
};

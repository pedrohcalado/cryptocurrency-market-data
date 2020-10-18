import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, setFilterOrder } from '../actions';
import './Filter.css';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <div className="f-main-container">
      <p>Select the filter order and column:</p>
      <div>
      <label htmlFor="ASC">
        Ascendent
        <input
          type="radio"
          value="ASC"
          id="ASC"
          name="order"
          onChange={(e) => dispatch(setFilterOrder(e.target.value))}
          className="f-radio-input"
        />
      </label>
      <label htmlFor="DESC" className="f-radio-label">
        Descendent
        <input
          type="radio"
          value="DESC"
          id="DESC"
          name="order"
          onChange={(e) => dispatch(setFilterOrder(e.target.value))}
          className="f-radio-input"
        />
      </label>
      </div>
      <select onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option value="last">Price</option>
        <option value="percentChange">Variation</option>
        <option value="baseVolume">Base volume</option>
        <option value="quoteVolume">Quoted volume</option>
      </select>
    </div>
  );
}

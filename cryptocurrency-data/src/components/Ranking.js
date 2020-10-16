import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { currencyPairInfo } from "../actions";
import Filter from './Filter';
import Table from './Table';

export default function Ranking() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.currencyPairInfoReducer.isLoading);
  useEffect(() => {
    dispatch(currencyPairInfo());
  }
    , [dispatch]);
  return (
    <div>
      <Filter />
      { isLoading && <div>Loading...</div>}
      { !isLoading && <Table />}
    </div>
  );
}
import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { currencyPairInfo } from "../actions";
import Filter from '../components/Filter';
import DataTable from '../components/DataTable';

export default function Ranking() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.currencyPairInfoReducer.isLoading);
  useEffect(() => {
    dispatch(currencyPairInfo());
  }
    , [dispatch]);
  return (
    <div>
      <h2>Ranking</h2>
      <Filter />
      { isLoading && <div>Loading...</div>}
      { !isLoading && <DataTable />}
    </div>
  );
}

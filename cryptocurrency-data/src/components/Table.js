import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Table, TableContainer, TableBody, TableHead, TablePagination, TableRow, TableCell } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function DataTable() {
  const data = useSelector((state) => state.currencyPairInfoReducer.currencyPairInfo);
  const filter = useSelector((state) => state.filterReducer.selectedFilter);
  const filterOrder = useSelector((state) => state.filterReducer.order);

  // filter the data
  data && filterOrder === 'DESC' && data.sort((a, b) => b[1][filter] - a[1][filter]);
  data && filterOrder === 'ASC' && data.sort((a, b) => a[1][filter] - b[1][filter]);

  // set local states for handling the pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table className="table table-striped table-bordered table-sm">
          <TableHead>
            <TableRow>
              <TableCell>Currency pair</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Variation</TableCell>
              <TableCell>Base volume</TableCell>
              <TableCell>Quoted volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(pair =>
              <TableRow key={pair[1].id}>
                <TableCell><Link to={`/${pair[0]}`}>{pair[0]}</Link></TableCell>
                <TableCell>{pair[1].last}</TableCell>
                <TableCell>{pair[1].percentChange}</TableCell>
                <TableCell>{pair[1].baseVolume}</TableCell>
                <TableCell>{pair[1].quoteVolume}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

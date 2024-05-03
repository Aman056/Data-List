import React from "react";
import { TablePagination } from "@mui/material";

const PaginationComponent = ({ count, rowsPerPage, page, onPageChange, onRowsPerPageChange }) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={(e) => onRowsPerPageChange(e)}
    />
  );
};

export default PaginationComponent;

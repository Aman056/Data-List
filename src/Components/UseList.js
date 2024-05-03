import React, { useState, useContext } from "react";
import { ProviderData } from "../App";
import SearchInput from "./SearchInput";
import TableComponent from "./TableComponent";
import PaginationComponent from "./PaginationComponent";

const UseList = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  const DataGet = useContext(ProviderData);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <div className="user-list">
      <div className="search-box">

        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>
      <TableComponent
        data={DataGet?.data}
        searchQuery={searchQuery}
        page={page}
        rowsPerPage={rowsPerPage}
      />
      <PaginationComponent
        count={DataGet?.data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default UseList;

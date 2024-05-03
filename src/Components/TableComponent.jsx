import React, { useState } from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button} from "@mui/material";
import filterImage from "../image/upanddown.png";
import UserDetailsModal from "./Modal/UserDetailsModal";
const TableComponent = ({ data, searchQuery, page, rowsPerPage }) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedData, setSortedData] = useState([...data]);
  const [userdetails, setuserdetails] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const openModal = (data) => {
    setIsOpen(true);
    setuserdetails(data);
  };

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSortByName = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA < nameB) return sortOrder === "asc" ? -1 : 1;
      if (nameA > nameB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sorting order
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead className="table-head">
            <TableRow>
            <TableCell>Id</TableCell>
              <TableCell onClick={handleSortByName} className="user-details-button">
                Name{" "}
                {sortOrder === "asc" && (
                  <img src={filterImage} className="filter-image" alt="Sort Ascending"/>
                )}
                {sortOrder === "desc" && (
                  <img src={filterImage} className="filter-image" alt="Sort Descending"/>
                )}
              </TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>City</TableCell>
              <TableCell>User Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.username}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.address.city}</TableCell>
                  <TableCell onClick={() => openModal(item)} className="user-details-button">
                    <Button variant="contained"> Click</Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          {/* UserDetailsModal */}
          <UserDetailsModal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
           <div className="modal-header">
           <h2>User Details</h2>
            <Button variant="outlined" color="error" sx={{p:2}} onClick={closeModal}>Close</Button>
           </div>
            <TableHead className="table-head">
              <TableRow >
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Website</TableCell>
                
              </TableRow>
            </TableHead>
            <TableRow>
            <TableCell>{userdetails?.id}</TableCell>
              <TableCell>{userdetails?.name}</TableCell>
              <TableCell>{userdetails?.username}</TableCell>
              <TableCell>{userdetails?.email}</TableCell>
              <TableCell>{userdetails?.address?.city}</TableCell>
              <TableCell>{userdetails?.phone}</TableCell>
              <TableCell>{userdetails?.website}</TableCell>
            </TableRow>
          </UserDetailsModal>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableComponent;

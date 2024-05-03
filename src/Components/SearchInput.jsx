import React from "react";
import { TextField } from "@mui/material";

const SearchInput = ({ value, onChange }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", }}
    >
      <TextField
        label="Search by name"
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: 500, height:30}}
      />
    </div>
  );
};

export default SearchInput;

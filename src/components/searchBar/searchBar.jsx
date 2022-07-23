import React from "react";
import Button from "../button/button";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar-container">
      <div class="input-group">
        <input type="text" class="form-control" />
        <Button>X</Button>
      </div>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import "./SearchBar.css";
import SearchPage from "../../pages/SearchPage/SearchPage";
import { useNavigate } from "react-router-dom";
import { Route } from "react-router";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(event) {
    navigate("/search", { state: { searchTerm: searchTerm } });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="inputbox"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          placeholder="Search videos here..."
        ></input>
        <button className="searchbutton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

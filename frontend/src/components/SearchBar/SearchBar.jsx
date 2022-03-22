import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault() 
    navigate("/search", {state:{ searchTerm:searchTerm} });
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
        />
        <button className="searchbutton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

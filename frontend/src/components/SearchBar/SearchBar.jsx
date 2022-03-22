import React, {useState} from "react";
import './SearchBar.css';
import { Routes } from "react-router";
import { Route } from "react-router";
import SearchPage from "../../pages/SearchPage/SearchPage";


const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(event){
        //event.preventDefault();
        <Routes>
            <Route path='/?' element={<SearchPage e={searchTerm} />} />
        </Routes >
    }


    return ( 
        <div onSubmit={handleSubmit}>
            <form action="/" method="get">
            <input className="inputbox" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} type='text' placeholder='Search videos here...'></input>
            <button className="searchbutton" type="submit">Search</button>
            </form>
    </div>
);
}
 
export default SearchBar;
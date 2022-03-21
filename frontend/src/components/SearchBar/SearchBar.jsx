import React, {useState} from "react";

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        // props.filterSongs(searchTerm)
    }
    return ( 
        <div>
            <form action="/" method="get">
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search videos here...'></input>
            <button type="submit">Search</button>
            </form>
    </div>
);
}
 
export default SearchBar;
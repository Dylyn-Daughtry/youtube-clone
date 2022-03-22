import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';

const SearchPage = (props) => {

    const [e, setE] = useState('')
    props.setE(e);

    async function search(){
        await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${e}&totalResults=6&key=AIzaSyBDtWaBV1dE1YDItvhkwBBibwZnWB9ethc`)
        console.log(search)
    }

    return ( 
        <div>

        </div>
     );
}
 
export default SearchPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchPage = (props) => {
    
    const [searchResult, setSearchResult] = useState([''])
    
    async function search(){
        try{
            const search = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${props.e}&totalResults=6&key=AIzaSyBDtWaBV1dE1YDItvhkwBBibwZnWB9ethc`)
        setSearchResult(search.data)
        console.log(searchResult)
    }
    catch(error){
        console.log(error)}}
        useEffect(() => {search()}, [])
        
        return ( 
            
         <div>
            
        </div>
     );
}

export default SearchPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";

const RelatedVideos = (props) => {
    const navigate = useNavigate();
  const {state} = useLocation();
  const [searchResult, setSearchResult] = useState([]);

    async function search() {
  
        const search = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&part=snippet&type=video&key=AIzaSyBDtWaBV1dE1YDItvhkwBBibwZnWB9ethc&type=video`
        );
        setSearchResult(search.data.items);
        console.log(searchResult);
  
    }
    
  useEffect(() => {
    search();
  }, [state.searchTerm]);

    return ( 
        <div>
        <h3>Related Videos</h3>
        <table className="table">
          {console.log("State in SearchPage comp", state)}
          <tbody>
            {searchResult &&
              searchResult.map((searchResult) => (
                <tr key={searchResult.etag}>
                  <img src={`https://i.ytimg.com/vi/${searchResult.id.videoId}/hqdefault.jpg`} onClick={() => {
                      navigate("/video", {state:{videoId:searchResult}})
                  }}>
                  </img>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
     );
}
 
export default RelatedVideos;
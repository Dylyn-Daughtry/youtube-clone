import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { useLocation } from "react-router";

const SearchPage = (props) => {
  const {state} = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  async function search() {
  
      const search = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${state.searchTerm}&totalResults=6&key=AIzaSyBDtWaBV1dE1YDItvhkwBBibwZnWB9ethc&type=video`
      );
      setSearchResult(search.data.items);
      console.log(searchResult);

  }

  useEffect(() => {
    search();
  }, [state.searchTerm]);

  return (
    <div>
      <h2>Videos</h2>
      <table className="table">
        {console.log("State in SearchPage comp", state)}
        <tbody>
          {searchResult &&
            searchResult.map((searchResult) => (
              <tr key={searchResult.etag}>
                <VideoPlayer video={searchResult.id.videoId} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;

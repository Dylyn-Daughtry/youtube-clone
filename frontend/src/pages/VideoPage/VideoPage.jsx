import React from "react";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { useLocation } from "react-router";

const VideoPage = (props) => {
    const [user, token] = useAuth();
    const {state} = useLocation();

    return ( 
        <div className="wrapper">
      <h1>Welcome Home {user.username}!</h1>
      <div className="container">
        <Comment videoId={state.videoId.id.videoId}/>
        <div className="videoplayer">
            {state.videoId.snippet.title}
          <VideoPlayer video={state.videoId.id.videoId}/>
          {state.videoId.snippet.description}
        </div>
        <div>
        <RelatedVideos videoId={state.videoId.id.videoId} />
        </div>
      </div>
    </div>
     );
}
 
export default VideoPage;
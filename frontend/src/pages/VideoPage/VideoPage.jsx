import React from "react";
import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import { useLocation } from "react-router";
import './VideoPage.css'

const VideoPage = (props) => {
    const [user, token] = useAuth();
    const {state} = useLocation();

    return ( 
        <div className="wrapper">
      <h1>Welcome Home {user.username}!</h1>
      <div className="container">
        <Comment videoId={state.videoId}/>
        <div className="videoplayer">
          <VideoPlayer video={state.videoId}/>
        </div>
        <div>
        <RelatedVideos videoId={state.videoId} />
        </div>
      </div>
    </div>
     );
}
 
export default VideoPage;
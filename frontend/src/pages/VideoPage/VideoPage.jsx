import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import React, { useState } from 'react';
import axios from "axios";
import Comment from "../../components/Comment/Comment";

const VideoPage = (props) => {
    return ( 
        <div>
            <VideoPlayer />
            <Comment />
        </div>
     );
}
 
export default VideoPage;
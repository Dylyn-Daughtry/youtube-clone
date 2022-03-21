import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import React, { useState } from 'react';
import axios from "axios";

const VideoPage = (props) => {
    return ( 
        <div>
            <VideoPlayer />
        </div>
     );
}
 
export default VideoPage;
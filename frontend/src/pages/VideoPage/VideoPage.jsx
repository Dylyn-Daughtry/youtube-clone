import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
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
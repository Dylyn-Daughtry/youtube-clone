import './VideoPlayer.css'
import CreateComment from '../CommentForm/CommentForm';


const VideoPlayer = (props) => {
    return ( 
        <div>
            <iframe className="video" id="ytplayer" type='text/html' width='640' height='360'
            src={`https://www.youtube.com/embed/${props.video}`} frame-border='0'>
            </iframe>
            <CreateComment video={props.video} />
        </div>
     );
}
 
export default VideoPlayer;
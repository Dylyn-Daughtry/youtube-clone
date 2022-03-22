import './VideoPlayer.css'

const VideoPlayer = (props) => {
    return ( 
        <iframe className="video" id="ytplayer" type='text/html' width='640' height='360'
         src={`https://www.youtube.com/embed/${props.video}`} frame-border='0'>
        </iframe>
     );
}
 
export default VideoPlayer;
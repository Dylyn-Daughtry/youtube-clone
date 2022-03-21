import './VideoPlayer.css'

const VideoPlayer = () => {
    return ( 
        <iframe className="video" id="ytplayer" type='text/html' width='640' height='360'
         src="https://www.youtube.com/embed/jNQXAC9IVRw" frameborder='0'>
        </iframe>
     );
}
 
export default VideoPlayer;
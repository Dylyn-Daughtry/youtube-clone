const VideoPlayer = () => {
    return ( 
        <iframe id="ytplayer" type='text/html' width='640' height='360'
         src="https://www.googleapis.com/youtube/v3/search?q=bob-ross&key=AIzaSyBDtWaBV1dE1YDItvhkwBBibwZnWB9ethc" frameborder='0'>
        </iframe>
     );
}
 
export default VideoPlayer;
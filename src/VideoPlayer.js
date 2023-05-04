import React, { useRef } from 'react';
import vid from './video.mp4';

const VideoPlayer = ({big}) => {
    const videoRef = useRef(null);

    const handleVideoLoad = () => {
        videoRef.current.play();
    }
    return (
        <video width="100%" height={big ? 360 : 240} controls={false} style={{ borderRadius: 4 }} onClick={handleVideoLoad} ref={videoRef} autoplay muted>
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
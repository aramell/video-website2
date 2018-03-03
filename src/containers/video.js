import React from 'react'
import video from '../video.mp4'


// import "node_modules/video-react/dist/video-react.css";

const Video = () => {

    return (
      <video id="video-background" loop autoPlay>
          <source src={video} type="video/mp4" />
      </video>
    )
  }

  export default Video

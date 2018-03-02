import React from 'react'
import { Player } from 'video-react'



// import "node_modules/video-react/dist/video-react.css";

export default (props) => {

    return (
      <video className="video-container video-container-overlay" autoPlay="true" loop muted={ this.props.muted }>
                    <source src= {video} type="video/mp4" />
      </video>
    )
  }


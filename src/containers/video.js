import React, { Component } from 'react'
import { Player } from 'video-react'

import '../Website Bio Video_8 seconds.mp4'
// import './node_modules/video-react/dist/video-react.css'
    export default (props) => {
        const video = '../Website Bio Video_8 seconds.mp4'
  
    return (
      
      <Player>
        <source src="..Website Bio Video_8 seconds.mp4" />
      </Player>

    )
  }


import { withSiteData } from 'react-static'
import React from 'react'
import Video from './video'
//
import logoImg from '../PhantomLandLogo2018-08.png'

export default withSiteData(() => (
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to PhatomLand Media</h1>
    <Video />
    <img src={logoImg} alt="" />
  </div>
))

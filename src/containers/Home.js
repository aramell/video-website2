import { withSiteData } from 'react-static'
import React from 'react'
import Video from './video'
//
import logoImg from '../PhantomLandLogo2018-08.png'
// import { styled } from 'styled-components';
const Home = () => (
  
    
  <div>
    <h1 style={{ textAlign: 'center' }}>Welcome to PhatomLand Media</h1>
    <Video />
    <img src={logoImg} alt="" />
  </div>
)
export default Home
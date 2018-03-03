import React from 'react'
import Routes from 'react-static-routes'

import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Home from './containers/Home'
//

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`
const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }

  nav{
    padding-top:0px;
    padding-bottom: 0px;
    background-color: transparent;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  nav-right{
    position: absolute;
    top: 10px;
    right: 10px;
    padding-top: 0%;
    padding-right: 5%;
  
  }
  nav-right a{
    color: rgb(15, 9, 9);  
    text-decoration: none;
    padding: 20px;
    font-weight: 1000;
  }
  nav-right a:hover{
    text-decoration: underline;
    /* color: #fff;  
    text-decoration: none;
    padding: 20px;
    font-weight: 900; */
  }
  
  .content {
    padding: 1rem;
    background: #d3d3d3;
  }

  img {
    max-width: 100%;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <div className="background">
        <nav>
          <nav-right>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/wedding">Weddings</Link>
            <Link to="/realestate">Real Estate</Link>
            <Link to="/promotionalcontent">Promotional Content</Link>
            <Link to="/contact">Contact</Link>
          </nav-right>
        </nav>
      </div>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)

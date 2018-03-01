import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

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

  nav {
    width: 100%;
    background: #666699
    ;

    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/wedding">Weddings</Link>
        <Link to="/realestate">Real Estate</Link>
        <Link to="/promotionalcontent">Promotional Content</Link>
        <Link to="/contact">Contact</Link>

      </nav>
      <div className="content">
        <Routes />
      </div>
    </AppStyles>
  </Router>
)

export default hot(module)(App)

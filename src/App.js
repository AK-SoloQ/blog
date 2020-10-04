import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar, Header, Footer, NotFound, Inprogress } from './components/common'
import { SideBarLeft, Home, Contact } from './components/pages'
import { PAGES, DOCKER, COMPOSE } from './constants'

import './assets/css/bootstrap.min.css'
// import './assets/css/font-awesome.min.css'
import './assets/css/bootstrap-theme.css'
import './assets/css/main.css'

function App () {
/**
 * @param {Google Analytics}
 */
  useEffect(() => {
    ReactGA.initialize('UA-179604032-1')
    ReactGA.pageview(window.location.pathname)
  })
  const history = createBrowserHistory()

  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.initialize('your tracking Id')
    ReactGA.set({ page: location.pathname }) // Update the user's current page
    ReactGA.pageview(location.pathname) // Record a pageview for the given page
  })

  /**
   *render the active Component
   */
  const renderComponent = (_active) => {
    let hasBody = true
    const _render = []

    if (_active !== 'Home') {
      _render.push(<header id='head' className='secondary' key='header' />)
    }

    const renderSideBarLeft = (content) => {
      return (
        <SideBarLeft name={_active} content={content} key='sideBarLeft' />
      )
    }
    switch (_active) {
      case 'Home':
        _render.push(<Header key='header' />)
        _render.push(<Home key='home' />)
        break
      case 'Docker':
        _render.push(renderSideBarLeft(DOCKER))
        break
      case 'Compose':
        _render.push(renderSideBarLeft(COMPOSE))
        break
      case 'Contact':
        _render.push(<Contact key='contact' />)
        break
        // case 'Vagrant':
        // case 'Ansible':
        // case 'Swarm':
      default:
        hasBody = false
        _render.push(<Inprogress key='notFound' />)
        break
    }
    if (hasBody) { _render.push(<Footer key='footer' />) }
    return _render
  }

  /**
  * the main render
  */
  if (PAGES.data.length) {
    const routeComponents = PAGES.data.filter(page => page.type === 'simple').map((page, index) => <Route exact path={page.path} key={index} children={renderComponent(page.name)} />)
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          {routeComponents}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  } else { return <NotFound /> }
}

export default App

import React, { useState } from 'react'

import { Navbar, Header, Footer, NotFound, Inprogress } from './components/common'
import { SideBarLeft, Home } from './components/pages'
import { PAGES, DOCKER, COMPOSE } from './constants'

function App () {
  /**
   * Init active components
   */
  const [active, setActive] = useState('Compose')
  /**
   *render the active Component
   */
  const renderComponent = () => {
    let hasBody = true
    const _render = []

    if (active !== 'Home') {
      _render.push(<header id='head' className='secondary' />)
    }

    const renderSideBarLeft = (content) => {
      return (
        <SideBarLeft name={active} handlerPageSelect={handlerPageSelect} content={content} key='sideBarLeft' />
      )
    }
    switch (active) {
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
   * handler to change the active(or selected) component
   */
  const handlerPageSelect = (name) => {
    setActive(name)
  }
  /**
  * the main render
  */

  return PAGES.data.length ? (
    <div className='home'>
      <Navbar
        pages={PAGES.data}
        active={active}
        handlerPageSelect={handlerPageSelect}
      />
      {renderComponent()}
    </div>
  ) : (
    <NotFound />
  )
}

export default App

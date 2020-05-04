import React, { useState } from 'react'

import Navbar from './Containers/nav/Navbar'
import Header from './Containers/header/Header'
import Footer from './Containers/footer/Footer'
import { NotFound, SideBarLeft, Container } from './Containers/pages'
import { PAGES, DOCKER } from './constants'

function App () {
  const [active, setActive] = useState('Docker')
  const renderContainer = () => {
    let hasBody = true
    const _render = []

    if (active !== 'Home') {
      _render.push(<header id='head' className='secondary' />)
    }

    switch (active) {
      case 'Home':
        _render.push(<Header />)
        _render.push(<Container />)
        break
      case 'Docker':
      case 'Compose':
      case 'Vagrant':
      case 'Ansible':
      case 'Swarm':

        _render.push(<SideBarLeft name={active} handlerPageSelect={handlerPageSelect} content={DOCKER} />)
        break
      default:
        hasBody = false
        _render.push(<NotFound />)
        break
    }
    if (hasBody) { _render.push(<Footer />) }
    return _render
  }

  const handlerPageSelect = (name) => {
    setActive(name)
  }

  return PAGES.length ? (
    <div className='home'>
      <Navbar
        pages={PAGES}
        active={active}
        handlerPageSelect={handlerPageSelect}
      />
      {renderContainer()}
    </div>
  ) : (
    <h1>Loading....</h1>
  )
}

export default App

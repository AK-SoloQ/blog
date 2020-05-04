import React, { useState } from 'react'

import Navbar from './Containers/nav/Navbar'
import Header from './Containers/header/Header'
import Footer from './Containers/footer/Footer'
import { NotFound, SideBarLeft, Container } from './Containers/pages'
import { PAGES } from './constants'

function App () {
  const [active, setActive] = useState('Docker')
  const renderContainer = () => {
    const body = []
    let hasBody = true
    if (active !== 'Home') {
      body.push(<header id='head' className='secondary' />)
    }
    switch (active) {
      case 'Home':
        body.push(<Header />)
        body.push(<Container />)
        break
      case 'Docker':
      case 'Compose':
      case 'Vagrant':
      case 'Ansible':
      case 'Swarm':
        body.push(<SideBarLeft name={active} handlerPageSelect={handlerPageSelect} />)
        break
      default:
        hasBody = false
        body.push(<NotFound />)
        break
    }
    if (hasBody) { body.push(<Footer />) }
    return body
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

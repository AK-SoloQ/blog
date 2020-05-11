import React from 'react'
import { Link } from 'react-router-dom'
import { PAGES } from '../../constants'

function Navbar (props) {
  const navBars = PAGES.data
  // let active = props.active

  /* const findActive = () => {
    var result = navBars.find((navbar) => navbar.name === active)
    if (typeof result === 'undefined') {
      result = navBars.find((item) => {
        if (item.type === 'dropdown') {
          var _result = item.menus.find((menu) => menu === active)
        }
        return !!_result
      })
    }
    active = result.name
  }
  findActive() */

  const renderDropDown = (navbar, index, _class) => {
    return (
      <li key={index} className={`dropdown ${_class}`}>
        <a href='/#' className='dropdown-toggle' data-toggle='dropdown'>
          {navbar.name} <b className='caret' />
        </a>
        <ul className='dropdown-menu'>
          {navbar.menus.map((menu, index) => {
            return (
              <li
                key={index}
              >
                <Link to={menu.path}> {menu.name} </Link>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }

  return (
    <div className='navbar navbar-inverse navbar-fixed-top headroom'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle'
            data-toggle='collapse'
            data-target='.navbar-collapse'
          >
            <span className='icon-bar' />
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <a href='/#' className='navbar-brand'>
            <img src='assets/images/logo1.png' alt='Progressus HTML5 template' />
          </a>
        </div>
        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav pull-right'>
            {navBars.map((navbar, index) => {
              return navbar.type === 'simple' ? (
                <li key={index}>
                  <Link to={navbar.path}> {navbar.name}</Link>
                </li>
              ) : (
                renderDropDown(navbar, index)
              )
            })}

            {/*
                  The Button SIGN IN & SiGN UP
            <li>
              <a className="btn" href="signin.html">
                SIGN IN / SIGN UP
              </a>
            </li>
            */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

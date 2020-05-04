import React, { useState } from 'react'

function Navbar (props) {
  console.log(props)
  const navBars = props.pages
  let active = props.active

  const findActive = () => {
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
  findActive()

  const renderDropDown = (navbar, index, _class) => {
    return (
      <li key={index} className={`dropdown ${_class}`}>
        <a className='dropdown-toggle' data-toggle='dropdown'>
          {navbar.name} <b className='caret' />
        </a>
        <ul className='dropdown-menu'>
          {navbar.menus.map((menu, index) => {
            const _class = menu === props.active ? 'active' : ''
            return (
              <li
                key={index}
                className={_class}
                onClick={() => {
                  props.handlerPageSelect(menu)
                }}
              >
                <a>{menu}</a>
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
            <span className='icon-bar' />{' '}
            <span className='icon-bar' />
            <span className='icon-bar' />
          </button>
          <a className='navbar-brand' href='index.html'>
            <img src='assets/images/logo.png' alt='Progressus HTML5 template' />
          </a>
        </div>
        <div className='navbar-collapse collapse'>
          <ul className='nav navbar-nav pull-right'>
            {navBars.map((navbar, index) => {
              const _class = navbar.name === active ? 'active' : ''

              return navbar.type === 'simple' ? (
                <li
                  key={index}
                  className={_class}
                  onClick={() => {
                    props.handlerPageSelect(navbar.name)
                  }}
                >
                  <a>{navbar.name}</a>
                </li>
              ) : (
                renderDropDown(navbar, index, _class)
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

import React from 'react'
import logo from './../../asset/images/in_progress.png'

function Inprogress () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='jumbotron pager'>
            <h1>UNDER CONSTRUCTION</h1>
            <h2>Our website is under contruction. we are working very hard to give you the best experience with this one.</h2>
            <img
              src={logo}
              alt='in_progress'
            />
            <div className='error-details'>
                      Sorry, Page under contruction, Comming Soon...
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inprogress

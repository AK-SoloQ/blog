import React from 'react'
import logoWebp from './../../asset/images/in_progress.webp'

function Inprogress () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='jumbotron pager'>
            <h1>UNDER CONSTRUCTION</h1>
            <h2>Our website is under contruction. we are working very hard to give you the best experience with this one.</h2>
            <img
              src={logoWebp}
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

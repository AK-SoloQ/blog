import React from 'react'
function NotFound () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='jumbotron pager'>
            <img
              src='https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png'
              alt='image_404'
            />
            <div className='error-details'>
              Sorry, an error has occured, Requested page not found!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound

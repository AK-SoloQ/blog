import React from 'react'
function Inprogress () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='jumbotron pager'>
            <h1>UNDER CONSTRUCTION</h1>
            <h2>Our website is under contruction. we are working very hard to give you the best experience with this one.</h2>
            <img
              src='https://lh3.googleusercontent.com/proxy/ew1IEC8QW0oVb1HmbMCley35w6VvcKDHj60ga4SjfS87KHdbqZ7zzAbFgqJRAEH93p3ArwBSgKNvp5KbIui4CziS5g'
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

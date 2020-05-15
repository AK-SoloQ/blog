import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Recaptcha from 'react-recaptcha'
// import validate from 'react-joi-validation'
import Joi from 'joi-browser'

var schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
  message: Joi.string().required()
})

function Contact () {
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  const phoneInput = useRef(null)
  const messageInput = useRef(null)

  const [isVerified, setIsVerified] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const valid = Joi.validate({
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      message: messageInput.current.value
    }, schema, {
      abortEarly: false
    })
    const newErros = {}
    if (valid.error) {
      valid.error.details.forEach(err => {
        newErros[err.path[0]] = err.message
      })
    }
    if (!isVerified) {
      newErros.cap = 'reCAPTCHA required'
    }
    setErrors(newErros)
    return valid.error === null && isVerified
  }

  const recaptchaLoaded = () => {
    console.info('Recaptcha is loaded')
  }
  const recaptchaVerify = () => {
    setIsVerified(true)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const isJoiValide = validate()
    if (isJoiValide) {
      window.open(`mailto:ahmed@abdelmoula.co?cc=${emailInput.current.value}&subject=The blog contact&body=Mr ${nameInput.current.value} 
      \n\n\n Phone : ${phoneInput.current.value} \n\n\n Email: ${emailInput.current.value} \n\n\n ${messageInput.current.value}`)
    }
  }
  const errorStyle = {
    color: 'red',
    fontSize: '12px'
  }
  return (
    <div className='container'>

      <ol className='breadcrumb'>
        <li><Link to='/'>Home</Link></li>
        <li className='active'>About</li>
      </ol>

      <div className='row'>
        <article className='col-sm-12 maincontent'>
          <header className='page-header'>
            <h1 className='page-title'>Contact me</h1>
          </header>
          <p>
          We’d love to hear from you. Interested in working together? Fill out the form below with some info about your project and
          I will get back to you as soon as I can. Please allow a couple days for me to respond.
          </p>
          <br />
          <form>
            <div className='row'>
              <div className='col-sm-4'>
                <input className='form-control' ref={nameInput} type='text' placeholder='Name' />
                <span style={errorStyle}>{errors.name}</span>
              </div>
              <div className='col-sm-4'>
                <input className='form-control' ref={emailInput} type='text' placeholder='Email' />
                <span style={errorStyle}>{errors.email}</span>
              </div>
              <div className='col-sm-4'>
                <input className='form-control' ref={phoneInput} type='text' placeholder='Phone' />
                <span style={errorStyle}>{errors.phone}</span>
              </div>
            </div>
            <br />
            <div className='row'>
              <div className='col-sm-12'>
                <textarea ref={messageInput} placeholder='Type your message here...' className='form-control' rows='9' />
                <span style={errorStyle}>{errors.message}</span>
              </div>
            </div>
            <br />
            <div className='row'>
              <Recaptcha
                sitekey='6LffnvcUAAAAAGkS0wZQX9YblQCZD1hd30voNOgw'
                render='explicit'
                size='normal'
                verifyCallback={recaptchaVerify}
                onloadCallback={recaptchaLoaded}
              />
              <span style={errorStyle}>{errors.cap}</span>
              <div className='col-sm-12 text-right'>
                <input
                  className='btn btn-action' type='submit' value='Send message' onClick={handleSubmit}
                />
              </div>
            </div>
          </form>

        </article>
      </div>
    </div>
  )
}

export default Contact

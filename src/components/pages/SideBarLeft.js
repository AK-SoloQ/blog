import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

function SideBarLeft ({ name, content }) {
/**
 * Init post, data and markdwon
 */
  const { data } = content
  const [post, setPost] = useState(null)

  /*
   * Component did update
   */
  useEffect(() => {
    fetch(content.markdown)
      .then(res => res.text())
      .then(post => setPost(post))
      .catch((err) => console.error(err))
  }, [name, content])

  /*
   * main render
   */
  return (
    <div className='container'>
      <ol className='breadcrumb'>
        <li>
          <Link
            to='/'
          >
            Home
          </Link>
        </li>
        <li className='active'>{name}</li>
      </ol>

      <div className='row'>
        {/* <!-- Sidebar --> */}
        <aside className='col-md-4 sidebar sidebar-left'>
          <div className='row widget'>
            <div className='col-xs-12'>
              <h4>Plan</h4>
              <ul className='list-unstyled list-spaces'>
                {data.plans.map((plan, index) => {
                  return (
                    <li key={index}>
                      <h6>{plan}</h6>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className='row widget'>
            {data.images.map((image, index) => {
              return (
                <div className='col-xs-12' key={index}>
                  <h4>{image.title}</h4>
                  <p>
                    <img src={image.path} alt={image.title} />
                  </p>
                </div>
              )
            })}
          </div>
        </aside>
        {/* <!-- /Sidebar --> */}

        {/* <!-- Article main content --> */}
        <article className='col-md-8 maincontent'>
          <ReactMarkdown source={post} />
        </article>
        {/* <!-- /Article --> */}

      </div>
    </div>
  )
}

export default SideBarLeft

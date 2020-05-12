import React from 'react'
import { Helmet } from 'react-helmet'

function Home () {
  return (
    <div className='container'>
      <Helmet meta={[
        { name: 'author', content: 'Abd Ahmed' },

        { name: 'twitter:site', content: 'blog.abdelmoula.co' },
        { name: 'twitter:creator', content: 'Abd Ahmed' },
        { name: 'twitter:title', content: 'The blog' },
        {
          name: 'twitter:image', content: 'https://blog.abdelmoula.co/assets/images/bg_header.jpg'
        },

        { property: 'og:title', content: 'The Blog' },
        { property: 'og:site_name', content: 'blog.abdelmoula.co' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://blog.abdelmoula.co/' },
        { property: 'og:description', content: 'Labore sint sint pariatur minim consequat proident elit laboris laboris consequat non laborum esse.' },
        { property: 'og:image', content: 'https://blog.abdelmoula.co/assets/images/bg_header.jpg' },
        { property: 'og:site_name', content: 'The blog' },

        { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
        { name: 'apple-itunes-app', content: 'app-id=1125423676' }
      ]} />
      <h2 className='text-center top-space'>Questions fréquemment posées</h2>
      <br />

      <div className='row'>
        <div className='col-sm-6'>
          <h3>Quel éditeur de code recommanderiez-vous?</h3>
          <p>
            Je vous recommande fortement
            <a href='https://code.visualstudio.com/'>VS Code</a> - un éditeur de
            texte gratuit, j'utilise quotidiennement. Un outil génial!
          </p>
        </div>
        <div className='col-sm-6'>
          <h3>
            Belle en-tête. Où puis-je trouver plus d'images comme celle-ci??
          </h3>
          <p>
            Eh bien, il y a des milliers de galeries d'art, mais
            personnellement, je préfère utiliser des photos de ces sites:
            <a href='http://unsplash.com'>Unsplash.com</a> et
            <a href='http://www.flickr.com/creativecommons/by-2.0/tags/'>
              Flickr - Creative Commons
            </a>
          </p>
        </div>
      </div>

      <div className='row'>
        <div className='col-sm-6'>
          <h3>Puis-je utiliser vos modules pour mes propres création ?</h3>
          <p>
            Oui, bien sûr Vous pouvez utiliser tous les modèles pour n'importe
            quel usage, n'oubliez pas de voir aussi les documentations
            officielles
          </p>
        </div>
        <div className='col-sm-6'>
          <h3>Pouvez-vous personnaliser un site pour moi?</h3>
          <p>
            Oui je peux. S'il vous plaît écrivez-moi à l'adresse
            <a href='mailto:ahmed@abdelmoula.com'> ahmed@abdelmoula.com </a> et
            décrivez vos besoins en détail. Veuillez noter que mes services sont
            bon marché.
          </p>
        </div>
      </div>

      {/* <div className="jumbotron top-space">
        <h4>
          Dicta, nostrum nemo soluta sapiente sit dolor quae voluptas quidem
          doloribus recusandae facere magni ullam suscipit sunt atque rerum
          eaque iusto facilis esse nam veniam incidunt officia perspiciatis at
          voluptatibus. Libero, aliquid illum possimus numquam fuga.
        </h4>
        <p className="text-right">
          <a className="btn btn-primary btn-large">Learn more »</a>
        </p>
      </div> */}
    </div>
  )
}

export default Home

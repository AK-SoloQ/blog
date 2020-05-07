import React from 'react'
function Footer () {
  return (
    <footer id='footer' className='top-space'>
      <div className='footer1'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 widget'>
              <h3 className='widget-title'>Contact</h3>
              <div className='widget-body'>
                <p>
                  <i className='fa fa-phone fa-2x' aria-hidden='true' />
                  {'  '}
                  (+216) 52 129435
                  <br />
                  <br />
                  <i className='fa fa-user fa-2x' aria-hidden='true' />
                  {'  '}
                  <a href='mailto:ahmed@abdelmoula.co'>ahmed@abdelmoula.co</a>
                  <br />
                  <br />
                  <i className='fa fa-home fa-2x' aria-hidden='true' />
                  {'  '}
                  11 Riadh Andalous, Ariana City, TN 2036
                </p>
              </div>
            </div>

            <div className='col-md-3 widget' />

            <div className='col-md-6 widget'>
              <h3 className='widget-title'>PROFIL PERSONNEL</h3>
              <div className='widget-body'>
                <p>
                  Passionné par la réalisation et le développement de projets
                  web, je me suis tout naturellement tourné vers une carrière de
                  développeur web. Aujourd'hui je souhaite intégrer une
                  entreprise dynamique et jeune, aussi je serai ravi de
                  rejoindre votre équipe en tant que développeur web.
                </p>
                <p>
                  Titulaire d'un diplômé en génie informatique option web et
                  mobilité, j'exerce depuis des années et je sais désormais
                  faire preuve d'un esprit d'initiative et de rigueur. Fort de
                  ma passion pour ce domaine, je suis très investi dans mon
                  travail et je prends grand plaisir à exercer, aussi cet
                  engouement se reflète largement dans la qualité de mon
                  travail.
                </p>
                <p>
                  Travailleur, efficace, sociable, organisé et doté d'un esprit
                  d'analyse, je prendrai soin d'assimiler les différents besoins
                  de votre groupe et saurai facilement m'intégrer. Très à l'aise
                  dans mon métier, je pourrai développer des applications web
                  modernes et tendances ainsi qu'en assurer la maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 widget'>
              <div className='widget-body'>
                <p className='simplenav'>
                  <a href='/#'> Home </a> |<a href='/#'> Contact </a>
                </p>
              </div>
            </div>

            <div className='col-md-6 widget'>
              <div className='widget-body'>
                <p className='text-right'>
                  Copyright &copy; 2020, Abd Ahmed. Designed par{' '}
                  <a href='http://gettemplate.com/' rel='designer'>
                    Gettemplate
                  </a>
                  {' - '}
                  <a href='https://pozhilov.com/' rel='designer'>
                    Pozhilov
                  </a>
                  {' (Many Thanks To Them) '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from "react";
function Header() {
  return (
    <header id="head">
      <div className="container">
        <div className="row">
          <h1 className="lead">WEB/JS , MOBILE, DEVOPS</h1>
          <p className="tagline">
            Apprenez de nouvelles choses Améliorez-vous et apprenez de nouvelles
            choses grâce à
            <a href="https://www.abdelmoula.co"> Mr Abdelmoula Ahmed</a>
          </p>
          <p>
            Après avoir appris sur Internet quoi de plus normal que de partager
            à son tour ? Passionné par le web depuis un peu plus de 3 ans
            maintenant j'aime partager mes compétences et mes découvertes avec
            les personnes qui ont cette même passion.
          </p>
          {/*<p>
            <a className="btn btn-default btn-lg" role="button">
              MORE INFO
            </a>
            <a className="btn btn-action btn-lg" role="button">
              DOWNLOAD NOW
            </a>
          </p>
          */}
        </div>
      </div>
    </header>
  );
}

export default Header;

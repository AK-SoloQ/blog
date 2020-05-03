import React from "react";

function Navbar() {
  const navBars = [
    { name: "Home", type: "simple" },
    { name: "Web", type: "simple" },
    { name: "DevOps", type: "dropdown", menus: ["Dev", "Ops"] },
    { name: "Contact", type: "simple" },
  ];
  const active = "DevOps";
  return (
    <div className="navbar navbar-inverse navbar-fixed-top headroom">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="assets/images/logo.png" alt="Progressus HTML5 template" />
          </a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav pull-right">
            {navBars.map((navbar, index) => {
              const _class = navbar.name === active ? "active" : "";

              return navbar.type === "simple" ? (
                <li key={index} className={_class}>
                  <a>{navbar.name}</a>
                </li>
              ) : (
                <li key={index} className={`dropdown ${_class}`}>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {navbar.name} <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu">
                    {navbar.menus.map((menu, index) => {
                      return (
                        <li key={index} className="active">
                          <a href="sidebar-left.html">{menu}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
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
  );
}

export default Navbar;

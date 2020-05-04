import React, { useState } from "react";

import Navbar from "./Containers/nav/Navbar";
import Header from "./Containers/header/Header";
import Footer from "./Containers/footer/Footer";
import { NotFound, SideBarLeft, Container } from "./Containers/pages";
import { PAGES } from "./constants";

function App() {
  const [active, setActive] = useState("Docker");
  const renderContainer = () => {
    let body = [];
    if (active !== "Home") {
      body.push(<header id="head" className="secondary" />);
    }
    switch (active) {
      case "Home":
        body.push(<Header />);
        body.push(<Container />);
        break;
      case "Docker":
        body.push(<SideBarLeft />);
        break;
      default:
        body.push(<NotFound />);
        break;
    }
    return body;
  };

  const handlerPageSelect = (name) => {
    setActive(name);
  };

  return PAGES.length ? (
    <div className="home">
      <Navbar
        pages={PAGES}
        active={active}
        handlerPageSelect={handlerPageSelect}
      />
      {renderContainer()}
      <Footer />
    </div>
  ) : (
    <h1>Loading....</h1>
  );
}

export default App;

import React, { useState, useEffect } from "react";

import Navbar from "./Containers/nav/Navbar";
import Header from "./Containers/header/Header";
import Container from "./Containers/home/Container";
import Footer from "./Containers/footer/Footer";

function App() {
  const [pages, setPages] = useState([]);
  const [active, setActive] = useState("Dev");
  useEffect(() => {
    setPages([
      { name: "Home", type: "simple" },
      { name: "Web", type: "simple" },
      { name: "DevOps", type: "dropdown", menus: ["Dev", "Ops"] },
      { name: "Contact", type: "simple" },
    ]);
  }, []);
  const handlerPageSelect = (name) => {
    setActive(name);
    console.log("cliked: ", name);
  };
  return pages.length ? (
    <div className="home">
      <Navbar
        pages={pages}
        active={active}
        handlerPageSelect={handlerPageSelect}
      />
      <Header />
      <Container />
      <Footer />
    </div>
  ) : (
    <h1>Loading....</h1>
  );
}

export default App;

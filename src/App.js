import React from "react";

import Navbar from "./Containers/nav/Navbar";
import Header from "./Containers/header/Header";
import Container from "./Containers/home/Container";
import Footer from "./Containers/footer/Footer";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;

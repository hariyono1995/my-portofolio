import React from "react";

import About from "components/about/About";
import Headers from "components/header/Header";
import Nav from "components/nav/Nav";
import Experience from "components/experience/Experience";
import Services from "components/services/Services";
import Portofolio from "components/portofolio/Portofolio";
import Testimonial from "components/testimonial/Testimonial";
import Contact from "components/contact/Contact";
import Footer from "components/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Headers />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portofolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;

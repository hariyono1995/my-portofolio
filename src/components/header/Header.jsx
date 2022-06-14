import React from "react";

import CTA from "./CTA";

import ME_bg_transparent from "assets/foto_bg_transparent-hariyono.png";

import "./header.css";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container container__header">
        <h2>I am</h2>
        <h1>Hariyono</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME_bg_transparent} alt="my-profile" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

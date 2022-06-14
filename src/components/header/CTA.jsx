import React from "react";
import CV from "assets/CV.HARIYONO.pdf";

export default function CTA() {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className=" btn-primary btn">
        Let Talk's
      </a>
    </div>
  );
}

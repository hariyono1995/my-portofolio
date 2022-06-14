import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

export default function Services() {
  return (
    <section id="services">
      <h5> What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
          </ul>
        </article>
        {/** END OF UI/UX DESIGN */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
          </ul>
        </article>
        {/** END OF WEB DEVELOPMENT */}
        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> lorem, ipsum dolor sit am consectetur elite. </p>
            </li>
          </ul>
        </article>
        {/** END OF CONTENT CREATION */}
      </div>
    </section>
  );
}

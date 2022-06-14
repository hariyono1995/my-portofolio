import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__content-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__content-icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__content-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__beckend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__content-icon" />
              <div>
                <h4>Node.Js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__content-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__content-icon" />
              <div>
                <h4>Squelize</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

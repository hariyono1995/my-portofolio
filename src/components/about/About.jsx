import React from "react";
import ME from "assets/foto_bg_red-hariyono.jpg";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";

export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={ME}
              alt="About Me"
              // style={{ height: "inherit", width: "inherit" }}
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                <em>Bootcamp Fullstact Node.js</em>
              </small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
            Saya adalah <em>Fresh graduate</em> dari Universitas Islam Negeri
            Walisongo progam studi Biologi. Saya mulai terjun di dunia
            pemrograman sejak bulan November 2021 yaitu bahasa golang dengan
            belajar otodidak dari berbagai sumber di internet, kemudian pada
            Desember 2021 sampai dengan bulan Maret 2022, saya mengikuti
            Bootcamp <em>fullstack Node.js</em> yang di adakan oleh{" "}
            <strong>Code.id</strong> yang dilakukan secara daring/online.
            Semanjak itu saya mulai tertarik dengan pemrograman dan berusaha
            mendalaminya.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

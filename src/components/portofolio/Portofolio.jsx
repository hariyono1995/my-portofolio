import React from "react";
import "./portofolio.css";
import IMG1 from "assets/movie-app.png";
import IMG2 from "assets/amazon-clone.png";
import IMG3 from "assets/tesla-clone.png";
import IMG4 from "assets/portfolio4.jpg";
import IMG5 from "assets/portfolio5.png";
import IMG6 from "assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Simple Movie App",
    github: "https://github.com/hariyono1995/course-codecamp-simple-movie-app",
    demo: "https://delightful-sunburst-ee3835.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Simple Amazon Clone",
    github: "https://github.com/hariyono1995/e-commerce",
    demo: "https://isnt-hariyono1995-awesome.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Simple Mockup Landing Page Tesla Clone",
    github:
      "https://github.com/hariyono1995/course-clever-programmer-tesla-clone",
    demo: "https://reliable-kringle-e4fd55.netlify.app/",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "portfolio title",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "portfolio title",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "portfolio title",
  //   github: "https://github.com",
  //   demo: "https://github.com",
  // },
];

export default function Portofolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} style={{ height: 270 }} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
              <a href={demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

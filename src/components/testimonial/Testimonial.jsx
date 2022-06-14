import React from "react";
import Slider from "react-slick";

import AVTR1 from "assets/avatar1.jpg";
import AVTR2 from "assets/avatar2.jpg";
import AVTR3 from "assets/avatar3.jpg";
import AVTR4 from "assets/avatar4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonial.css";

const settings = {
  autoplay: true,
  autoplaySpeed: 7000,
  dots: true,
  infinite: true,
  initialSlide: 2,
  slidesToScroll: 1,
  slidesToShow: 1,
};

export default function Testimonial() {
  const data = [
    {
      id: 1,
      avatar: AVTR1,
      name: "portfolio title",
      review:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      avatar: AVTR2,
      name: "portfolio title",
      review:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      avatar: AVTR3,
      name: "portfolio title",
      review:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 4,
      avatar: AVTR4,
      name: "portfolio title",
      review:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Slider {...settings} className="container testimonials__container">
        {data.map(({ id, avatar, name, review }, index) => (
          <article key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={name} />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </article>
        ))}
      </Slider>
    </section>
  );
}

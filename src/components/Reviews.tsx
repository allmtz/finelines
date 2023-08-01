import React, { Component } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    text: "Excellent service",
    author: "Diego",
  },
  {
    text: "Great atmosphere for family! I take my kids all the time and everyone is always super nice and welcoming",
    author: "Ellie",
  },
  {
    text: "Great service, will come back",
    author: "Izzy",
  },

  {
    text: "The perfect place to drop by and get a haircut. Accommodating, fast and professional ",
    author: "Gabe",
  },
  ,
];

export default class FocusOnSelect extends Component {
  render() {
    const settings = {
      className: "center mt-2 lg:mt-4",
      focusOnSelect: true,
      centerMode: true,
      // centerPadding: "100px",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      // adaptiveHeight: true,
    };
    return (
      <Slider {...settings}>
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="md:text-lg flex flex-col items-center text-center cursor-pointer"
          >
            <p>&quot;{r!.text}&quot;</p>
            <p>- {r!.author}</p>
          </div>
        ))}
      </Slider>
    );
  }
}

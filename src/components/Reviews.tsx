import React, { Component } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    text: "Great cuts great service",
    author: "Mike",
  },
  {
    text: "Great atmosphere for family. I take my kids all the time and everyone is always super nice and welcoming",
    author: "Ellie",
  },
  {
    text: "Will be coming back!",
    author: "John",
  },

  {
    text: "The perfect place to stop by and get a haircut. Accommodating, fast and professional ",
    author: "Gabe",
  },
  ,
];

export default class FocusOnSelect extends Component {
  render() {
    const settings = {
      className: "center",
      focusOnSelect: true,
      centerMode: true,
      // centerPadding: "100px",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <Slider {...settings}>
        {reviews.map((r, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center cursor-pointer"
          >
            <p>"{r!.text}"</p>
            <p>- {r!.author}</p>
          </div>
        ))}
      </Slider>
    );
  }
}

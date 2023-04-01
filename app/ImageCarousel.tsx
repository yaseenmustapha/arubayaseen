"use client";

import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: "/nikkah1.png",
    caption: "Nikkah Illustration",
  },
  {
    src: "/nikkah2.jpg",
    caption: "Nikkah IRL",
  },
  {
    src: "/nikkah3.jpg",
    caption: "Nikkah 3",
  },
  {
    src: "/nikkah4.jpg",
    caption: "Nikkah 4",
  },
  {
    src: "/nikkah5.jpg",
    caption: "Nikkah 5",
  },
  {
    src: "/nikkah6.jpg",
    caption: "Nikkah 6",
  },
];

export default function ImageCarousel() {
  return (
    <Carousel showArrows={true} autoPlay infiniteLoop swipeable>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.caption} />
        </div>
      ))}
    </Carousel>
  );
}

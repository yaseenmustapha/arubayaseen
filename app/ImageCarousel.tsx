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
  {
    src: "/nikkah7.jpg",
    caption: "Nikkah 7",
  },
  {
    src: "/nikkah8.jpg",
    caption: "Nikkah 8",
  },
  {
    src: "/nikkah9.jpg",
    caption: "Nikkah 9",
  },
  {
    src: "/nikkah10.jpg",
    caption: "Nikkah 10",
  },
  {
    src: "/nikkah11.jpg",
    caption: "Nikkah 11",
  },
  {
    src: "/nikkah12.jpg",
    caption: "Nikkah 12",
  },
  {
    src: "/nikkah13.jpg",
    caption: "Nikkah 13",
  },
  {
    src: "/nikkah14.jpg",
    caption: "Nikkah 14",
  },
  {
    src: "/nikkah15.jpg",
    caption: "Nikkah 15",
  },
  {
    src: "/nikkah16.jpg",
    caption: "Nikkah 16",
  },
  {
    src: "/nikkah17.jpg",
    caption: "Nikkah 17",
  },
  {
    src: "/nikkah18.jpg",
    caption: "Nikkah 18",
  },
  {
    src: "/nikkah19.jpg",
    caption: "Nikkah 19",
  },
  {
    src: "/nikkah20.jpg",
    caption: "Nikkah 20",
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

"use client";

import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const images = [
  {
    src: "/nikkah.png",
    caption: "Nikkah Illustration",
  },
  {
    src: "/nikkah2.jpg",
    caption: "Nikkah IRL",
  },
  {
    src: "/image1.jpg",
    caption:
      "Canyon Lights at Capilano Suspension Bridge Park",
  },
  {
    src: "/image2.jpg",
    caption: "Water's Edge Café",
  },
  {
    src: "/image3.jpg",
    caption: "Dessert at Happy Singh Street Eats",
  },
  {
    src: "/image4.jpg",
    caption: "Valentine's Day 2023",
  },
  {
    src: "/image5.jpg",
    caption: "Ski day with friends at Cypress Mountain",
  },
  {
    src: "/image6.jpg",
    caption: "Hina's Dholki",
  },
  {
    src: "/image7.jpg",
    caption: "Out for dessert",
  },
  {
    src: "/image8.jpg",
    caption: "Polaroid from the Nikkah",
  },
  {
    src: "/image9.jpg",
    caption: "Dinner at RH Rooftop Restaurant",
  },
  {
    src: "/image10.jpg",
    caption: "With Yaseen's family at Capilano Suspension Bridge Park",
  },
  {
    src: "/image11.jpg",
    caption: "Cooper's Hawk Restaurant",
  },
  {
    src: "/image12.jpg",
    caption: "The Bean at Millennium Park",
  },
];

export default function ImageCarousel() {
  return (
    <Carousel showArrows={true} autoPlay infiniteLoop swipeable dynamicHeight>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.caption} />
        </div>
      ))}
    </Carousel>
  );
}

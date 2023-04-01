"use client";

import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
  {
    src: '/nikkah.png',
    alt: 'Nikkah',
    caption: 'Portrait of Aruba and Yaseen at their Nikkah',
  },
  {
    src: '/image1.jpg',
    alt: 'Image 1',
    caption: 'Caption for image 1',
  },
  {
    src: '/image2.jpg',
    alt: 'Image 2',
    caption: 'Caption for image 2',
  },
  {
    src: '/image3.jpg',
    alt: 'Image 3',
    caption: 'Caption for image 3',
  },
  {
    src: '/image4.jpg',
    alt: 'Image 4',
    caption: 'Caption for image 4',
  },
  {
    src: '/image5.jpg',
    alt: 'Image 5',
    caption: 'Caption for image 5',
  },
  {
    src: '/image6.jpg',
    alt: 'Image 6',
    caption: 'Caption for image 6',
  },
  {
    src: '/image7.jpg',
    alt: 'Image 7',
    caption: 'Caption for image 7',
  },
  {
    src: '/image8.jpg',
    alt: 'Image 8',
    caption: 'Caption for image 8',
  },
  {
    src: '/image9.jpg',
    alt: 'Image 9',
    caption: 'Caption for image 9',
  },
  {
    src: '/image10.jpg',
    alt: 'Image 10',
    caption: 'Caption for image 10',
  },
  {
    src: '/image11.jpg',
    alt: 'Image 11',
    caption: 'Caption for image 11',
  },
  {
    src: '/image12.jpg',
    alt: 'Image 12',
    caption: 'Caption for image 12',
  },
];

export default function ImageCarousel() {
  return (
    <Carousel showArrows={true} autoPlay infiniteLoop swipeable dynamicHeight>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.caption}</p>
        </div>
      ))}
    </Carousel>
  );
};
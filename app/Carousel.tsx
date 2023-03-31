"use client";
import React, { useRef, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const imageUrls = ["/nikkah.png", "/image1.jpg", "/nikkah.png"];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {imageUrls.map((url, index) => (
          <img className="embla__slide" style={{maxWidth: "100%", objectFit: "cover"}} key={index} src={url} />
        ))}
      </div>
    </div>
  );
}

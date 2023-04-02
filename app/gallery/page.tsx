"use client";

import React, { useEffect, useState } from "react";
import { PhotoAlbum, RenderPhotoProps } from "react-photo-album";

const photos = [
  { src: "/image1.jpg", width: 3024, height: 4032 },
  { src: "/image2.jpg", width: 2316, height: 3088 },
  { src: "/image3.jpg", width: 4032, height: 3024 },
  { src: "/image4.jpg", width: 3024, height: 4032 },
  { src: "/image5.jpg", width: 3024, height: 4032 },
  { src: "/image6.jpg", width: 3024, height: 4032 },
  { src: "/image7.jpg", width: 960, height: 1931 },
  { src: "/image8.jpg", width: 3024, height: 4032 },
  { src: "/image9.jpg", width: 3024, height: 4032 },
  { src: "/image10.jpg", width: 3024, height: 4032 },
  { src: "/image11.jpg", width: 1500, height: 2000 },
  { src: "/image12.jpg", width: 3024, height: 4032 },
  { src: "/image13.jpg", width: 1156, height: 1540 },
  { src: "/image14.jpg", width: 2054, height: 1540 },
  { src: "/image15.jpg", width: 6240, height: 4160 },
  { src: "/image16.jpg", width: 6240, height: 4160 },
  { src: "/image17.jpg", width: 6240, height: 4160 },
  { src: "/image18.jpg", width: 6240, height: 4160 },
  { src: "/image19.jpg", width: 6240, height: 4160 },
  { src: "/image20.jpg", width: 6240, height: 4160 },
  { src: "/image21.jpg", width: 6240, height: 4160 },
  { src: "/image22.jpg", width: 6240, height: 4160 },
  { src: "/image23.jpg", width: 6240, height: 4160 },
  { src: "/image24.jpg", width: 6240, height: 4160 },
  { src: "/image25.jpg", width: 4160, height: 6240 },
  { src: "/image26.jpg", width: 6240, height: 4160 },
  { src: "/image27.jpg", width: 6240, height: 4160 },
  { src: "/image28.jpg", width: 4160, height: 6240 },
  { src: "/image29.jpg", width: 6240, height: 4160 },
  { src: "/image30.jpg", width: 6240, height: 4160 },
  { src: "/image31.jpg", width: 6240, height: 4160 },
  { src: "/image32.jpg", width: 6240, height: 4160 },
  { src: "/image33.jpg", width: 1500, height: 2000 },
];

const randomSort = () => Math.random() - 0.5;

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);

  const randomizedPhotos = [...photos].sort(randomSort);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPhoto = React.useCallback(
    ({ imageProps: { alt, style, ...rest } }: RenderPhotoProps) => (
      <img
        alt={alt}
        style={{
          ...style,
          // padding: "20px",
          // margin: "10px",
          borderRadius: "4px",
          boxShadow:
            "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
        {...rest}
      />
    ),
    []
  );

  return (
    <main>
      <div
        className="mx-auto -mt-36 p-10 overflow-hidden max-w-6xl"
        style={{ width: "100%" }}
      >
        {isMobile ? (
          randomizedPhotos.map((photo, i) => (
            <img
              key={i}
              src={photo.src}
              alt="Gallery image"
              style={{
                width: "100%",
                padding: "20px",
                margin: "10px",
                borderRadius: "4px",
                boxShadow:
                  "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              }}
            />
          ))
        ) : (
          <PhotoAlbum
            layout="rows"
            photos={randomizedPhotos}
            targetRowHeight={400}
            renderPhoto={renderPhoto}
          />
        )}
      </div>
    </main>
  );
}

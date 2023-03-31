"use client";

import Link from "next/link";
import Carousel from "./Carousel";
import "./embla.css";

export default function Home() {
  return (
    <main>
      <div style={{ maxHeight: "200px" }}>
        <Carousel />
      </div>
    </main>
  );
}

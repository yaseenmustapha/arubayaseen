"use client";

import { useRef } from "react";
import Script from "next/script";

export default function Registry() {
  const containerRef = useRef<HTMLDivElement>(null);

  function moveScript(this: any) {
    containerRef?.current?.appendChild(this);
  }

  return (
    <main>
      <div
        ref={containerRef}
        id="script-container"
        className="max-w-2xl mx-auto"
      >
        <Script
          id="script_myregistry_giftlist_iframe"
          type="text/javascript"
          src="//www.myregistry.com//Visitors/GiftList/iFrames/EmbedRegistry.ashx?r=g3ZvBMoBh-O0sovCX-VnEw2&v=2"
          async
          onLoad={moveScript}
        />
      </div>
    </main>
  );
}

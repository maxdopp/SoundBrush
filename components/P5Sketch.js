"use client";

import { useRef, useEffect } from "react";
import p5 from "p5";

export default function P5Sketch({ sketch }) {
  const containerRef = useRef();

  useEffect(() => {
    let myP5;
    if (containerRef.current) {
      myP5 = new p5(sketch, containerRef.current);
    }
    return () => {
      // Cleanup on unmount
      if (myP5) myP5.remove();
    };
  }, [sketch]);

  return <div ref={containerRef} />;
}
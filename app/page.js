"use client";

import P5Sketch from "@/components/P5Sketch";

export default function Home() {
  const mySketch = (p) => {
    let x = 0;

    p.setup = () => {
      p.createCanvas(400, 400);
    };

    p.draw = () => {
      p.background(220);
      p.fill(50, 100, 200);
      p.ellipse(x, 200, 50, 50);
      x = (x + 2) % p.width;
    };
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">p5.js in Next.js 🎨</h1>
      <P5Sketch sketch={mySketch} />
    </main>
  );
}
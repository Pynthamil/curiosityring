"use client";

import { useEffect, useRef } from 'react';

const gameboyArt = [
  "           _________________________________________           ",
  "         /                                           \\         ",
  "        |   _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _   |        ",
  "        |  |                                       |  |        ",
  "        |  |                                       |  |        ",
  "        |  |                                       |  |        ",
  "        |  |                                       |  |        ",
  "        |  |                                       |  |        ",
  "        |  |                                       |  |        ",
  "        |  |                                       |  |        ",
  "        |  |                                       |  |        ",
  "        |  |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|  |        ",
  "        |                                             |        ",
  "        |             N I N T E N D O                 |        ",
  "        |                                             |        ",
  "        |                                             |        ",
  "        |       _                              (A)    |        ",
  "        |     _| |_                                   |        ",
  "        |    |_   _|                      (B)         |        ",
  "        |      |_|                                    |        ",
  "        |                                             |        ",
  "        |                            \\\\\\\\\\\\\\\\\\\\       |        ",
  "        |                            \\\\\\\\\\\\\\\\\\\\       |        ",
  "        |                                             |        ",
  "         \\___________________________________________/         "
];

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let fontSize = 12;
    let startX = 0;
    let startY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Calculate font size so the art fits nicely on screen
      const artWidth = gameboyArt[0].length;
      const artHeight = gameboyArt.length;
      
      // Make it prominent but don't overflow the screen
      fontSize = Math.min((canvas.width * 0.7) / artWidth, 24);
      
      // Center the art
      const totalTextWidth = artWidth * fontSize * 0.6; // approx width of monospace char
      const totalTextHeight = artHeight * fontSize * 1.2; // approx line height
      
      startX = (canvas.width - totalTextWidth) / 2;
      startY = (canvas.height - totalTextHeight) / 2;
      
      draw(); // Redraw on resize
    };

    const draw = () => {
      // Background color - pale off-white
      ctx.fillStyle = '#F8F7F3';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px var(--font-geist-mono), monospace";
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      
      // Bluish grey color for the lines
      ctx.fillStyle = '#788B9C'; 
      
      for (let j = 0; j < gameboyArt.length; j++) {
        const line = gameboyArt[j];
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char !== ' ') {
            // Draw each character with slight spacing
            ctx.fillText(
              char,
              startX + (i * fontSize * 0.6),
              startY + (j * fontSize * 1.2)
            );
          }
        }
      }
    };

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}

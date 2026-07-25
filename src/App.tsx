import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppPreview from "./components/AppPreview";
import LogoCloud from "./components/LogoCloud";
import Features from "./components/Features";

const TOTAL_FRAMES = 240;

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(4, "0");
      img.src = `/frames/frame_${frameNum}.jpg`;

      img.onload = () => {
        loadedCount++;
        const progress = Math.floor((loadedCount / TOTAL_FRAMES) * 100);
        setLoadingProgress(progress);

        // Draw initial frame as soon as frame 0 is ready
        if (i === 0 && lastDrawnFrameRef.current === -1) {
          drawFrame(0);
        }

        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      imagesRef.current = [];
    };
  }, []);

  // Draw frame on background canvas with object-fit: cover scaling
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (canvas.width !== viewportWidth * dpr || canvas.height !== viewportHeight * dpr) {
      canvas.width = viewportWidth * dpr;
      canvas.height = viewportHeight * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;

    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = viewportWidth / viewportHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasAspect > imgAspect) {
      drawWidth = viewportWidth;
      drawHeight = viewportWidth / imgAspect;
      offsetX = 0;
      offsetY = (viewportHeight - drawHeight) / 2;
    } else {
      drawHeight = viewportHeight;
      drawWidth = viewportHeight * imgAspect;
      offsetX = (viewportWidth - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, viewportWidth, viewportHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Scroll listener to update target frame based on page scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
      targetFrameRef.current = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation loop with physics inertia lerp for smooth scrubbing
  useEffect(() => {
    const renderLoop = () => {
      const target = targetFrameRef.current;
      const current = currentFrameRef.current;

      // Inertia smoothing factor (0.18 gives buttery smooth responsive motion)
      const nextFrame = current + (target - current) * 0.18;
      currentFrameRef.current = nextFrame;

      const roundedFrame = Math.round(nextFrame);
      if (roundedFrame !== lastDrawnFrameRef.current && roundedFrame >= 0 && roundedFrame < TOTAL_FRAMES) {
        drawFrame(roundedFrame);
        lastDrawnFrameRef.current = roundedFrame;
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (lastDrawnFrameRef.current >= 0) {
        drawFrame(lastDrawnFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black/40 text-white font-sans selection:bg-blue-500/30">
      {/* Top Preloading Glow Bar */}
      {!isLoaded && (
        <div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 z-50 transition-all duration-150 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
          style={{ width: `${loadingProgress}%` }}
        />
      )}

      {/* Fixed Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full object-cover block z-0 pointer-events-none"
      />

      {/* Foreground Landing Page UI Layer */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Hero />
          <AppPreview />
          <LogoCloud />
          <Features />
        </main>
      </div>
    </div>
  );
}

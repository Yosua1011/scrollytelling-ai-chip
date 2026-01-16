"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const TOTAL_FRAMES = 240;
const FRAME_PATH = "/sequence/ezgif-frame-";

function getFramePath(index: number): string {
  const frameNumber = String(index + 1).padStart(3, "0");
  return `${FRAME_PATH}${frameNumber}.jpg`;
}

export default function ChipScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const currentFrameRef = useRef(0);

  // Handle mounting
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload all images
  useEffect(() => {
    if (!isMounted) return;

    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const preloadImages = async () => {
      const imagePromises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = getFramePath(i);
          img.onload = () => {
            loadedCount++;
            setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
            resolve(img);
          };
          img.onerror = reject;
        });
      });

      try {
        const results = await Promise.all(imagePromises);
        loadedImages.push(...results);
        setImages(loadedImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setIsLoading(false);
      }
    };

    preloadImages();
  }, [isMounted]);

  // Draw frame to canvas
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx || images.length === 0) return;

      const img = images[frameIndex];
      if (!img) return;

      // Set canvas dimensions to match image
      if (canvas.width !== img.width || canvas.height !== img.height) {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    },
    [images]
  );

  // Update frame on scroll
  useEffect(() => {
    if (images.length === 0 || !isMounted) return;

    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const frameIndex = Math.min(
        Math.floor(progress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    });

    // Draw initial frame
    drawFrame(0);

    return () => unsubscribe();
  }, [scrollYProgress, images, drawFrame, isMounted]);

  // Text overlay opacity transforms - use safe defaults
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const feature1Opacity = useTransform(
    scrollYProgress,
    [0.2, 0.28, 0.42, 0.5],
    [0, 1, 1, 0]
  );
  const feature1X = useTransform(
    scrollYProgress,
    [0.2, 0.28, 0.42, 0.5],
    [-50, 0, 0, -50]
  );

  const feature2Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.53, 0.67, 0.75],
    [0, 1, 1, 0]
  );
  const feature2X = useTransform(
    scrollYProgress,
    [0.45, 0.53, 0.67, 0.75],
    [50, 0, 0, 50]
  );

  const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.8, 0.9], [30, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d0d0d]">
          <div className="relative h-32 w-32">
            {/* Spinner ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/10" />
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/80 animate-spin"
              style={{ animationDuration: "1s" }}
            />
            {/* Progress text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/80 text-lg font-light tracking-tight">
                {loadProgress}%
              </span>
            </div>
          </div>
          <p className="mt-6 text-white/50 text-sm font-light tracking-wide">
            Loading NeuralCore X1
          </p>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="max-h-full max-w-full object-contain"
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        />

        {/* Text Overlays - only show when loaded */}
        {!isLoading && (
          <>
            {/* Title - 0% */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4"
              style={{ opacity: titleOpacity, scale: titleScale }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white/90 tracking-tight text-center">
                NeuralCore X1
              </h1>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/60 font-light tracking-wide text-center">
                The Future of AI.
              </p>
            </motion.div>

            {/* Feature 1 - 30% (Left aligned) */}
            <motion.div
              className="absolute left-6 sm:left-12 md:left-20 top-1/2 -translate-y-1/2 pointer-events-none"
              style={{ opacity: feature1Opacity, x: feature1X }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-3xl" />
                <div className="relative">
                  <p className="text-xs sm:text-sm text-cyan-400/80 font-medium tracking-widest uppercase mb-2">
                    Processing Power
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 tracking-tight">
                    256 Billion
                  </h2>
                  <p className="text-xl sm:text-2xl md:text-3xl text-white/60 font-light mt-1">
                    Parameters
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 - 60% (Right aligned) */}
            <motion.div
              className="absolute right-6 sm:right-12 md:right-20 top-1/2 -translate-y-1/2 pointer-events-none text-right"
              style={{ opacity: feature2Opacity, x: feature2X }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-3xl" />
                <div className="relative">
                  <p className="text-xs sm:text-sm text-cyan-400/80 font-medium tracking-widest uppercase mb-2">
                    Architecture
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 tracking-tight">
                    Built for Speed.
                  </h2>
                  <p className="text-xl sm:text-2xl md:text-3xl text-white/60 font-light mt-1">
                    Designed for Scale.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA - 90% (Centered) */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-4"
              style={{ opacity: ctaOpacity, y: ctaY }}
            >
              <div className="relative text-center">
                <div className="absolute -inset-8 bg-white/5 blur-3xl rounded-full" />
                <div className="relative">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 tracking-tight">
                    Power Your Next
                  </h2>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white/90 tracking-tight">
                    Breakthrough.
                  </h2>
                  <button className="mt-8 px-8 py-4 bg-white text-black font-medium text-lg rounded-full pointer-events-auto hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

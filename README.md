# NeuralCore X1 - Scrollytelling Demo

A scrollytelling product demo website for a fictional AI chip. Features canvas-based frame sequencing triggered by scroll position to create a cinematic, immersive experience.

## Features

- **Scroll-driven animation** - 240-frame sequence rendered to canvas based on scroll position
- **Synchronized text overlays** - Content appears/disappears at specific scroll thresholds using Framer Motion
- **Responsive design** - Optimized for mobile, tablet, and desktop
- **Dark theme** - Premium, futuristic aesthetic

## Tech Stack

- **Next.js 16** with App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Framer Motion** - scroll animations and transforms

## Project Structure

```
├── app/
│   ├── page.tsx           # Home - scrollytelling experience
│   ├── contact/page.tsx   # Contact form
│   └── specs/page.tsx     # Product specifications
├── components/
│   └── ChipScroll.tsx     # Core scrollytelling component
└── public/sequence/       # 240 animation frames (ezgif-frame-001.jpg - 240.jpg)
```

## How It Works

1. **Frame preloading** - All 240 frames load with a progress indicator
2. **Scroll mapping** - `useScroll` maps vertical scroll (0-1) to frame index (0-239)
3. **Canvas rendering** - Current frame draws to a sticky canvas element
4. **Text animations** - `useTransform` triggers text overlays at scroll thresholds

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Note

NeuralCore X1 is a fictional product created for demonstration purposes.

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Carousel.css";

// keep index within [0, len)
const wrap = (i, len) => ((i % len) + len) % len;

// slide variants (direction-aware)
const variants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

// how strong the swipe must be to trigger a page change
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;
const SWIPE_CONFIDENCE = 3000;

/**
 * images: array of strings (URLs) or objects { src, alt? }
 * autoPlay: boolean (default false)
 * interval: number in ms (default 4000)
 */
export default function Carousel({
  images,
  autoPlay = false,
  interval = 4000,
}) {
  // normalize to [{src, alt}]
  const slides = (images || []).map((img) =>
    typeof img === "string" ? { src: img, alt: "" } : img
  );

  const len = slides.length;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir) => {
    setDirection(dir);
    setPage((p) => p + dir);
  };

  // optional autoplay
  useEffect(() => {
    if (!autoPlay || len <= 1) return;
    const id = setInterval(() => paginate(1), interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, len]);

  if (len === 0) return null;

  const index = wrap(page, len);

  return (
    <div className="carousel" aria-roledescription="carousel">
      <button
        type="button"
        className="carousel-nav prev"
        onClick={() => paginate(-1)}
        aria-label="Previous slide"
      >
        ‹
      </button>

      <div className="carousel-viewport">
        <AnimatePresence custom={direction} mode="popLayout" initial={false}>
          <motion.img
            key={index} // important for enter/exit
            src={slides[index].src}
            alt={slides[index].alt || ""}
            className="carousel-slide"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.18 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              const power = swipePower(info.offset.x, info.velocity.x);
              if (power > SWIPE_CONFIDENCE) {
                paginate(info.offset.x < 0 ? 1 : -1);
              }
            }}
          />
        </AnimatePresence>
      </div>

      <button
        type="button"
        className="carousel-nav next"
        onClick={() => paginate(1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="carousel-dots" role="tablist" aria-label="Slides">
        {slides.map((_, i) => {
          const active = i === index;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={active}
              className={`carousel-dot ${active ? "active" : ""}`}
              onClick={() => {
                const dir = i > index ? 1 : -1;
                setDirection(dir);
                setPage((p) => p + (i - index));
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

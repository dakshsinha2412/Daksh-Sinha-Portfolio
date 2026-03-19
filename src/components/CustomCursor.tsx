import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible,  setIsVisible]  = useState(false);

  useEffect(() => {
    let rafId: number;
    let ringX = 0, ringY = 0;
    let dotX  = 0, dotY  = 0;
    const RING_SPEED = 0.12;

    const moveCursor = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      }
    };

    const animateRing = () => {
      ringX += (dotX - ringX) * RING_SPEED;
      ringY += (dotY - ringY) * RING_SPEED;
      const t = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = t;
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-cursor-hover]")) setIsHovering(true);
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-cursor-hover]")) setIsHovering(false);
    };
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Outer ring — lags behind dot */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[99998] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          border: "1.5px solid hsl(var(--foreground))",
          borderRadius: "50%",
          opacity: isVisible ? (isHovering ? 0.5 : 0.35) : 0,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: isHovering ? 6 : 5,
          height: isHovering ? 6 : 5,
          background: "hsl(var(--foreground))",
          borderRadius: "50%",
          opacity: isVisible ? 1 : 0,
          transition: "width 0.2s ease, height 0.2s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;

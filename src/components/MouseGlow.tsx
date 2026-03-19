import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animateRing = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.1);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.1);

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animateRing);
    };

    // Scale up ring on hover over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [data-cursor-grow]");
      if (ringRef.current) {
        if (isInteractive) {
          ringRef.current.style.transform = "translate(-50%, -50%) scale(2.2)";
          ringRef.current.style.borderColor = "rgba(220,38,38,0.6)";
          ringRef.current.style.backgroundColor = "rgba(220,38,38,0.04)";
        } else {
          ringRef.current.style.transform = "translate(-50%, -50%) scale(1)";
          ringRef.current.style.borderColor = "rgba(0,0,0,0.35)";
          ringRef.current.style.backgroundColor = "transparent";
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    rafRef.current = requestAnimationFrame(animateRing);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Small inner dot — instant follow */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "#111",
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
          top: 0,
          left: 0,
        }}
      />

      {/* Outer ring — lags behind with lerp */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid rgba(0,0,0,0.35)",
          backgroundColor: "transparent",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), border-color 0.3s, background-color 0.3s",
          willChange: "left, top",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
};

export default CustomCursor;

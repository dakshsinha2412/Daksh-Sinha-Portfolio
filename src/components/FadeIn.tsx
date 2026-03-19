import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  distance?: number;
}

export const FadeIn = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  fullWidth = false,
  distance = 40,
}: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getInitialTransform = () => {
    if (direction === "up") return `translateY(${distance}px) scale(0.97)`;
    if (direction === "down") return `translateY(-${distance}px) scale(0.97)`;
    if (direction === "left") return `translateX(${distance}px)`;
    if (direction === "right") return `translateX(-${distance}px)`;
    return "scale(0.97)";
  };

  return (
    <div
      ref={ref}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px) translateX(0px) scale(1)" : getInitialTransform(),
        transition: isVisible
          ? "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)"
          : "none",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

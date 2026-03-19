import { useEffect, useState } from "react";

const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Animate progress bar to 100% over ~1.6s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Short pause at 100% then fade out
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onDone, 600);
          }, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 32);

    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ transition: "opacity 0.6s ease" }}
    >
      {/* Name / Logo */}
      <div className="mb-12 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground mb-3">
          Portfolio
        </p>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-none">
          Daksh<span className="text-red-500">.</span>
        </h1>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-border overflow-hidden">
        <div
          className="h-full bg-foreground transition-all ease-linear"
          style={{ width: `${progress}%`, transition: "width 0.032s linear" }}
        />
      </div>

      {/* Counter */}
      <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground tabular-nums">
        {String(progress).padStart(3, "0")}%
      </p>
    </div>
  );
};

export default LoadingScreen;

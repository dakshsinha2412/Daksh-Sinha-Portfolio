import { useState, useEffect } from "react";
import profileImg from "@/assets/profile-new.png";
import { FadeIn } from "@/components/FadeIn";

// Marquee ticker content
const ticker = ["Full Stack Developer", "React & Node.js", "Open to Work", "AI Projects", "Chennai, India", "Gurugram, India", "CSE Student"];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imgParallax = scrollY * 0.25;
  const topTextParallax = scrollY * 0.1;
  const solidTextParallax = scrollY * 0.45;
  const hollowTextParallax = scrollY * 0.12;

  return (
    <section id="home" className="relative min-h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden bg-background pt-32 pb-20">

      {/* Top intro text */}
      <FadeIn delay={0} direction="down" className="relative z-40 mb-8 text-center mt-10 md:mt-0">
        <p
          className="text-xl md:text-2xl font-semibold text-foreground/60 tracking-wide"
          style={{ transform: `translateY(${topTextParallax}px)`, fontFamily: "'Inter', sans-serif" }}
        >
          Welcome. I am Daksh Sinha, a
        </p>
      </FadeIn>

      {/* Solid "Full Stack" */}
      <FadeIn delay={120} direction="up" fullWidth className="relative z-10 flex flex-col items-center justify-center text-center tracking-tighter">
        <h1
          className="text-[17vw] md:text-[14vw] font-black text-foreground uppercase whitespace-nowrap leading-[0.82]"
          style={{ transform: `translateY(${solidTextParallax}px)` }}
        >
          Full Stack
        </h1>
      </FadeIn>

      <div className="h-[8vh] md:h-[12vh] w-full" />

      {/* Hollow "Developer" */}
      <FadeIn delay={240} direction="up" fullWidth className="relative z-30 pointer-events-none flex flex-col items-center justify-center text-center tracking-tighter">
        <h1
          className="text-[17vw] md:text-[14vw] font-black text-transparent uppercase whitespace-nowrap leading-[0.82]"
          style={{
            WebkitTextStroke: "max(2px, 0.3vw) hsl(var(--foreground))",
            transform: `translateY(${hollowTextParallax}px)`,
          }}
        >
          Developer
        </h1>
      </FadeIn>

      {/* Portrait */}
      <div
        className="absolute top-[48%] md:top-[50%] left-1/2 z-20 w-[85vw] md:w-[45vw] lg:w-[33vw] max-w-[520px] pointer-events-none"
        style={{ transform: `translate(-50%, calc(-50% + ${imgParallax}px))` }}
      >
        <FadeIn delay={400} direction="up" className="w-full">
          <img
            src={profileImg}
            alt="Daksh Sinha"
            className="w-full h-auto object-cover"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              filter: "grayscale(10%) contrast(1.05)",
            }}
          />
        </FadeIn>
      </div>

      {/* CTA Buttons */}
      <FadeIn delay={600} direction="up" className="relative z-40 mt-16 flex flex-col sm:flex-row shadow-sm border border-border bg-background">
        <a href="#projects" className="btn-solid text-center min-w-[200px] pointer-events-auto">
          My Projects
        </a>
        <a href="#contact" className="py-4 px-8 text-center min-w-[200px] font-semibold tracking-wide text-sm transition-all duration-200 hover:bg-foreground/5 text-foreground cursor-pointer pointer-events-auto">
          Hire Me
        </a>
      </FadeIn>

      {/* Location badge */}
      <div className="absolute bottom-10 left-6 md:left-12 z-40">
        <FadeIn delay={800} direction="left">
          <div className="flex items-center gap-3 border border-border bg-background/80 backdrop-blur-sm px-4 py-2.5 shadow-sm">
            <span className="text-xl leading-none">🇮🇳</span>
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground leading-none mb-1">Location</p>
              <p className="text-xs font-bold text-foreground tracking-wide">India</p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-6 md:right-12 z-40 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-foreground/40" />
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-foreground/40 rotate-90 translate-y-6">Scroll</span>
      </div>

      {/* Marquee ticker strip */}
      <div className="absolute bottom-0 left-0 right-0 z-40 border-t border-border bg-foreground text-background overflow-hidden h-9 flex items-center">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((item, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] px-6">{item}</span>
              <span className="text-background/30 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

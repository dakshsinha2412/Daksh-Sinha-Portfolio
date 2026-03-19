import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const sections = ["projects", "skills", "experience", "services", "about"];
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(id); }, { threshold: 0.4 });
      ob.observe(el);
      observers.push(ob);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const links = [
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Services", href: "#services", id: "services" },
    { label: "About", href: "#about", id: "about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-black text-xl tracking-tighter text-foreground uppercase" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Daksh<span className="text-red-500">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href}
              className={`relative text-sm font-medium transition-colors tracking-wide flex items-center gap-1.5 ${active === l.id ? "text-foreground" : "text-foreground/55 hover:text-foreground"}`}
              style={{ fontFamily: "'Inter', sans-serif" }}>
              {active === l.id && <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />}
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">EN / <span className="text-foreground">IN</span></span>
          <a href="#contact" className="btn-solid">Contact Me</a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest text-foreground flex items-center gap-2">
              {active === l.id && <span className="w-1.5 h-1.5 rounded-full bg-red-500" />}
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-solid text-center mt-2">Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


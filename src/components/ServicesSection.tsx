import { Globe, Layout, Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Building responsive, modern web applications with clean, maintainable code and optimal performance.",
    highlights: ["React & Tailwind CSS", "Responsive Design", "API Integration"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Creating intuitive, user-centered interfaces with attention to accessibility and visual polish.",
    highlights: ["Clean Layouts", "Accessibility First", "Modern Aesthetics"],
  },
  {
    icon: Sparkles,
    title: "AI-Based Projects",
    desc: "Exploring AI, NLP, and prompt engineering to build innovative, intelligent solutions.",
    highlights: ["Google Gemini", "NLP & OCR", "Prompt Engineering"],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-32 bg-secondary">
    <div className="container mx-auto px-6 md:px-12">
      <FadeIn delay={100} direction="up" className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
            Area of Expertise<span className="text-red-500">.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-0 border border-border">
        {services.map((s, i) => (
          <FadeIn key={s.title} delay={200 + i * 100} direction="up">
            <div className={`p-10 h-full flex flex-col gap-6 group cursor-default transition-colors duration-300 hover:bg-foreground ${i < services.length - 1 ? "md:border-r border-b md:border-b-0 border-border" : ""}`}>
              <s.icon size={24} className="text-muted-foreground group-hover:text-background/70 transition-colors" />
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter text-foreground mb-3 group-hover:text-background transition-colors">{s.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed group-hover:text-background/65 transition-colors">{s.desc}</p>
              </div>
              <ul className="mt-auto space-y-2.5">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-background/60 transition-colors">
                    <ArrowRight size={11} className="shrink-0" />{h}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;

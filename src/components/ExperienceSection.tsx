import { FadeIn } from "@/components/FadeIn";

const experiences = [
  {
    role: "Research & Data Member",
    org: "Placfv's",
    orgFull: "SRM University",
    period: "Jan 2025 - Present",
    isCurrent: true,
    bullets: [
      "Worked on HR data collection and structured placement analytics.",
      "Conducted LinkedIn outreach to industry professionals and alumni.",
      "Coordinated placement-related activities and campus recruitment drives.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-32 bg-background">
    <div className="container mx-auto px-6 md:px-12">
      <FadeIn delay={100} direction="up" className="mb-20">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
          Extracurricular Activities<span className="text-red-500">.</span>
        </h2>
      </FadeIn>

      <div className="space-y-0 border-t border-border">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.role} delay={200 + i * 100} direction="up">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-16 border-b border-border group">
              {/* Left */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground leading-tight">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-red-500 tracking-wide">
                  {exp.org} · {exp.orgFull}
                </p>
                <span className={`inline-flex text-[10px] font-black uppercase tracking-widest px-3 py-1 w-fit mt-1 ${exp.isCurrent ? "bg-foreground text-background" : "border border-border text-muted-foreground"}`}>
                  {exp.period}
                </span>
              </div>

              {/* Right */}
              <ul className="space-y-4">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-foreground/70 leading-relaxed">
                    {b}
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

export default ExperienceSection;

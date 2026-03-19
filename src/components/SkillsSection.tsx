import { FadeIn } from "@/components/FadeIn";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML / CSS"],
  },
  {
    category: "Backend & DB",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    category: "Tools & AI",
    items: ["Git / GitHub", "Google Gemini API", "REST APIs", "VS Code"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-6 md:px-12">
      <FadeIn delay={100} direction="up" className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground leading-none">
            Tech<br className="md:hidden" /> Stack<span className="text-red-500">.</span>
          </h2>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {skills.map((group, gi) => (
          <FadeIn key={group.category} delay={200 + gi * 100} direction="up">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-8 pb-4 border-b border-border">
              {group.category}
            </h3>
            <div className="flex flex-col gap-3">
              {group.items.map((skill) => (
                <span key={skill} className="text-sm font-semibold text-foreground border-b border-border pb-3 last:border-0 last:pb-0">
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;

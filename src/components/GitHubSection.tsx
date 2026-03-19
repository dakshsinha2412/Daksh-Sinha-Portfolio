import { Activity, Code2, GitBranch, Star } from "lucide-react";

const highlights = [
  { icon: Activity, text: "Actively seeking internship opportunities" },
  { icon: Star, text: "Strong collaboration and teamwork skills" },
  { icon: Code2, text: "Focus on clean, efficient, maintainable code" },
  { icon: GitBranch, text: "Continuously improving through learning and projects" },
];

const GitHubSection = () => (
  <section className="py-28">
    <div className="container mx-auto px-6">
      <div className="mb-14">
        <span className="section-tag mb-4 inline-flex">Open Source</span>
        <h2 className="text-4xl lg:text-5xl font-black leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
          GitHub & <span className="gradient-text-primary">Highlights</span>
        </h2>
        <div className="h-0.5 w-16 mt-4 rounded-full"
          style={{ background: "linear-gradient(to right, hsl(185 95% 55%), hsl(142 72% 55%))" }} />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* GitHub Stats */}
        <div className="glass-card p-8 space-y-5"
          style={{ border: "1px solid hsl(185 95% 55% / 0.15)" }}>
          <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wider"
            style={{ color: "hsl(185 95% 55%)" }}>
            // GitHub Stats
          </h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=dakshsinha2412&show_icons=true&theme=github_dark&bg_color=0a0f1e&border_color=1a2540&title_color=22d3ee&icon_color=4ade80&text_color=64748b&hide_border=false"
            alt="GitHub Stats"
            className="w-full rounded-xl"
            loading="lazy"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=dakshsinha2412&layout=compact&theme=github_dark&bg_color=0a0f1e&border_color=1a2540&title_color=22d3ee&text_color=64748b&hide_border=false"
            alt="Top Languages"
            className="w-full rounded-xl"
            loading="lazy"
          />
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          {highlights.map((h, i) => {
            const colors = [
              { bg: "hsl(185 95% 55% / 0.08)", border: "hsl(185 95% 55% / 0.2)", icon: "hsl(185 95% 55%)" },
              { bg: "hsl(142 72% 55% / 0.08)", border: "hsl(142 72% 55% / 0.2)", icon: "hsl(142 72% 55%)" },
              { bg: "hsl(260 85% 65% / 0.08)", border: "hsl(260 85% 65% / 0.2)", icon: "hsl(260 85% 65%)" },
              { bg: "hsl(185 95% 55% / 0.08)", border: "hsl(185 95% 55% / 0.2)", icon: "hsl(185 95% 55%)" },
            ];
            const c = colors[i % colors.length];
            return (
              <div key={h.text}
                className="glass-card p-5 flex items-center gap-4 card-lift"
                style={{ border: `1px solid ${c.border}`, background: c.bg }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <div className="p-3 rounded-xl shrink-0"
                  style={{ background: `${c.icon}18`, color: c.icon }}>
                  <h.icon size={20} />
                </div>
                <p className="text-foreground text-sm font-medium">{h.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default GitHubSection;

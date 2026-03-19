import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio website with smooth animations and a clean dark UI.",
    stack: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/dakshsinha2412/Daksh_Portfolio",
    live: "#",
    year: "2024",
    tag: "Frontend",
  },
  {
    title: "NetflixClone",
    description: "A simple Netflix homepage clone built with HTML and CSS. It mimics the look and feel of Netflix India's landing page.",
    stack: ["HTML", "CSS"],
    github: "https://github.com/dakshsinha2412/NetflixClone",
    live: "#",
    year: "2024",
    tag: "Frontend",
  },
  {
    title: "SpotifyClone",
    description: "A simple Spotify clone with music streaming and playlist features.",
    stack: ["HTML", "CSS"],
    github: "https://github.com/dakshsinha2412/SpotifyClone",
    live: "#",
    year: "2024",
    tag: "Frontend",
  },
  {
    title: "XClone",
    description: "A responsive X clone built with HTML and Tailwind CSS.",
    stack: ["HTML", "Tailwind CSS"],
    github: "https://github.com/dakshsinha2412/XClone",
    live: "#",
    year: "2024",
    tag: "Frontend",
  },
  {
    title: "Lexify",
    description: "An AI-powered dyslexia-friendly reader that transforms complex text into clear and digestible content.",
    stack: ["Node.js", "React", "Express", "Google Gemini"],
    github: "https://github.com/dakshsinha2412/Lexify",
    live: "#",
    year: "2024",
    tag: "Full Stack",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-6 md:px-12">
      <FadeIn delay={100} direction="up" className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
            Projects<span className="text-red-500">.</span>
          </h2>
          <a href="https://github.com/dakshsinha2412" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors md:pb-3">
            View All on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </FadeIn>

      <div className="space-y-0 border-t border-border">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={200 + i * 100} direction="up">
            <div className="grid md:grid-cols-[80px_1fr_2fr_auto] gap-8 md:gap-12 py-14 border-b border-border group hover:bg-foreground/[0.02] transition-colors duration-300 px-2 -mx-2">
              {/* Counter */}
              <div className="hidden md:flex items-start pt-1">
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground/50">{String(i + 1).padStart(2, "0")}</span>
              </div>

              {/* Title + year */}
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 inline-block mb-4">{project.tag}</span>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-foreground group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description + stack */}
              <div className="space-y-4">
                <p className="text-sm text-foreground/65 leading-[1.75]">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-widest border border-border bg-background px-3 py-1 text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex md:flex-col gap-3 items-start md:items-end pt-0 md:pt-8">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-border px-4 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors">
                  <Github size={13} /> Code
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;

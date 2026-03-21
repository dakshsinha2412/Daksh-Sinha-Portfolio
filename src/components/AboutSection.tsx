import { MapPin, GraduationCap, BookOpen, Lightbulb, Code2, Users, School } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Technologies" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 bg-secondary">
    <div className="container mx-auto px-6 md:px-12">
      <FadeIn delay={100} direction="up" className="mb-20">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
          About Me<span className="text-red-500">.</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        {/* Left — bio */}
        <FadeIn delay={200} direction="right" className="space-y-8">
          <p className="text-xl md:text-2xl font-semibold text-foreground leading-snug">
            Sophomore at{" "}
            <span className="font-black">SRMIST, Kattankulathur, Chennai</span>
          </p>
          <p className="text-base text-foreground/65 leading-[1.8]">
            I have a strong foundation in programming and core computer science concepts, with a keen interest in
            web development and artificial intelligence. I enjoy building efficient, user-focused solutions while
            continuously learning and improving. Whether it's frontend design, AI integrations, or systems — I love
            turning ideas into reality cleanly and creatively.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 border-t border-border pt-8">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-foreground tracking-tighter">{value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: MapPin, label: "Gurugram" },
               { icon: GraduationCap, label: "SRM University, Chennai" },
              { icon: School, label: "City Montessori School, Lucknow" },
              { icon: BookOpen, label: "CSE Student" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground">
                <Icon size={13} className="text-muted-foreground" />
                {label}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Right — trait cards */}
        <FadeIn delay={400} direction="left" className="flex flex-col gap-0 border border-border">
          {[
            { icon: Lightbulb, label: "Continuous Learner", desc: "Always exploring new technologies and frameworks to stay at the edge of innovation." },
            { icon: Code2, label: "Problem Solver", desc: "Breaking down complex challenges into elegant, maintainable solutions." },
            { icon: Users, label: "Team Player", desc: "Thriving in collaborative environments and always open to constructive feedback." },
          ].map(({ icon: Icon, label, desc }, i) => (
            <div key={label}
              className={`p-8 flex gap-5 items-start transition-colors group cursor-default ${i < 2 ? "border-b border-border" : ""} hover:bg-foreground hover:text-background`}>
              <Icon size={18} className="mt-0.5 shrink-0 text-muted-foreground group-hover:text-background/70 transition-colors" />
              <div>
                <span className="text-sm font-black uppercase tracking-widest block mb-2 group-hover:text-background transition-colors">{label}</span>
                <p className="text-sm leading-relaxed text-foreground/60 group-hover:text-background/65 transition-colors">{desc}</p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </div>
  </section>
);

export default AboutSection;

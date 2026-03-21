import { FadeIn } from "@/components/FadeIn";
import { GraduationCap, School } from "lucide-react";

const educationDetails = [
  {
    role: "Bachelor of Technology - BTech, Computer Science",
    org: "SRM Institute of Science and Technology",
    orgFull: "Kattankulathur, Chennai, Tamil Nadu",
    period: "Aug 2024 \u2013 May 2028",
    icon: GraduationCap,
    isCurrent: true,
  },
  {
    role: "High School Diploma, Science",
    org: "City Montessori School",
    orgFull: "Lucknow, Uttar Pradesh",
    period: "Jul 2014 \u2013 May 2024",
    icon: School,
    isCurrent: false,
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-6 md:px-12">
      <FadeIn delay={100} direction="up" className="mb-20">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-foreground break-words sm:break-normal">
          Education<span className="text-red-500">.</span>
        </h2>
      </FadeIn>

      <div className="space-y-0 border-t border-border">
        {educationDetails.map((edu, i) => {
          const Icon = edu.icon;
          return (
            <FadeIn key={edu.role} delay={200 + i * 100} direction="up">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 py-16 border-b border-border group">
                {/* Left */}
                <div className="flex flex-col gap-3">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-secondary rounded-xl border border-border mt-1">
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-foreground leading-tight tracking-tight">
                        {edu.org}
                      </h3>
                      <p className="text-sm font-semibold text-muted-foreground tracking-wide mt-1">
                        {edu.orgFull}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-col justify-center space-y-3">
                  <p className="text-lg font-bold text-foreground/90">
                    {edu.role}
                  </p>
                  <span className={`inline-flex text-[10px] font-black uppercase tracking-widest px-3 py-1 w-fit ${edu.isCurrent ? "bg-foreground text-background" : "border border-border text-muted-foreground"}`}>
                    {edu.period}
                  </span>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  </section>
);

export default EducationSection;

import { Github, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Footer = () => (
  <footer className="border-t border-border py-12 bg-background">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left / Logo */}
        <FadeIn delay={0} direction="up" className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#home" className="font-black text-2xl tracking-tighter text-foreground uppercase">
            Daksh<span className="text-red-500">.</span>
          </a>
          <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mt-2">
            © {new Date().getFullYear()} Daksh Sinha · All rights reserved
          </p>
        </FadeIn>


        {/* Right / Socials */}
        <FadeIn delay={300} direction="up" className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/dakshsinha2412", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/dakshsinha2412/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:dakshsinha2412@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer" aria-label={label}
              className="w-10 h-10 flex items-center justify-center border border-border hover:bg-foreground hover:text-background text-foreground transition-colors duration-300">
              <Icon size={16} />
            </a>
          ))}
        </FadeIn>
      </div>
    </div>
  </footer>
);

export default Footer;

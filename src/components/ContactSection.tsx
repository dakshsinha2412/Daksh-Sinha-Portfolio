import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, ArrowRight, CheckCircle, Loader } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const SERVICE_ID  = "service_u21hkf2";
const TEMPLATE_ID = "template_f81ohno";
const PUBLIC_KEY  = "hx6OH9kAeV3UEmX3W";

type Status = "idle" | "sending" | "success" | "error";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-[#f5f5f5]">
      <div className="container mx-auto px-6 md:px-12">
        <FadeIn delay={100} direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
              Get In<br/>Touch<span className="text-red-500">.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left Info */}
          <FadeIn delay={300} direction="right" className="space-y-12">
            <p className="text-base text-foreground/80 leading-relaxed font-medium">
              I'm always open to discussing new opportunities, projects, or just having a chat about tech. Feel free to reach out — I typically respond within 24 hours.
            </p>

            <div className="space-y-0 border-t border-border">
              {[
                { icon: Mail, label: "Email", value: "dakshsinha2412@gmail.com", href: "mailto:dakshsinha2412@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/dakshsinha2412", href: "https://www.linkedin.com/in/dakshsinha2412/" },
                { icon: Github, label: "GitHub", value: "github.com/dakshsinha2412", href: "https://github.com/dakshsinha2412" },
              ].map((link) => (
                <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="flex items-center justify-between py-8 border-b border-border group hover:pl-6 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <link.icon size={26} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{link.label}</p>
                      <p className="text-sm font-semibold text-foreground mt-1.5">{link.value}</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-foreground">Status: Available</span>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={400} direction="left">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center py-20 text-center bg-white border border-border shadow-sm">
                <CheckCircle size={48} className="text-green-500 mb-6" />
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Message Sent</h3>
                <p className="text-sm font-semibold text-muted-foreground max-w-sm mb-8">
                  Thanks! I'll get back to you as soon as I can.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-solid">
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="bg-white border border-border shadow-sm p-8 md:p-14 space-y-10">
                <div className="grid md:grid-cols-2 gap-10 md:gap-8">
                  <div className="space-y-4">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Your Name</label>
                    <input type="text" name="name" required
                      className="w-full bg-transparent border-b-[1.5px] border-border pb-4 text-sm font-semibold text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                      placeholder="John Doe" />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Your Email</label>
                    <input type="email" name="email" required
                      className="w-full bg-transparent border-b-[1.5px] border-border pb-4 text-sm font-semibold text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                      placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                  <input type="text" name="title" required
                    className="w-full bg-transparent border-b-[1.5px] border-border pb-4 text-sm font-semibold text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/30"
                    placeholder="Project Inquiry" />
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea name="message" required rows={5}
                    className="w-full bg-transparent border-b-[1.5px] border-border pb-4 text-sm font-semibold text-foreground focus:outline-none focus:border-foreground transition-colors resize-none placeholder:text-muted-foreground/30"
                    placeholder="Hello Daksh..." />
                </div>

                {status === "error" && (
                  <p className="text-sm font-semibold text-red-500 text-center">Something went wrong. Please try again.</p>
                )}

                <button type="submit" disabled={status === "sending"}
                  className="w-full btn-solid py-5 flex items-center justify-center gap-3">
                  {status === "sending" ? <><Loader size={18} className="animate-spin" /> Sending...</> : "Send Message"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

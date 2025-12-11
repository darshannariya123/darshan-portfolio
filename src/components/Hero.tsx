import { Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-12 py-3 border-y border-border/50">
          <div className="flex whitespace-nowrap marquee">
            <span className="mx-8 text-muted-foreground text-sm">
              💻 Available for Hire | 👨‍💻 Full Stack Developer | ⚡ Building Fast, Reliable Web Apps | 💡 Turning Ideas into Reality | 🎨 Crafting Smooth, User-Friendly Experiences | 🤝 Let's Build Something Amazing Together | 🚀 Let's Make It Happen!!
            </span>
            <span className="mx-8 text-muted-foreground text-sm">
              💻 Available for Hire | 👨‍💻 Full Stack Developer | ⚡ Building Fast, Reliable Web Apps | 💡 Turning Ideas into Reality | 🎨 Crafting Smooth, User-Friendly Experiences | 🤝 Let's Build Something Amazing Together | 🚀 Let's Make It Happen!!
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect">
                  <img
                    src="Darshan.jpg"
                    alt="Darshan Nariya - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-xl">👋</span>
                </div>
              </div>

              {/* Name & Title */}
              <h1 className="font-display text-3xl font-bold text-foreground mb-3">
                Darshan Nariya
              </h1>
              <p className="text-muted-foreground max-w-sm mb-6">
                An enthusiastic Full Stack Developer, eager to learn and build creative, reliable web applications.
              </p>

              {/* Contact Info */}
              <div className="w-full glass-card p-4 mb-6 space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href="tel:+9106488349" className="hover:text-primary transition-colors text-sm">
                    +91 9106488349
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:darshannariya123@gmail.com" className="hover:text-primary transition-colors text-sm">
                    darshannariya123@gmail.com
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 w-full mb-6">
                <Button className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 text-primary-foreground font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Book A Call
                </Button>
                <a href="/Darshan_Nariya.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex-1 border-border hover:border-primary hover:bg-primary/10">
                  My Resume
                </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/darshannariya" },
                  { icon: Linkedin, href: "https://linkedin.com/in/darshan-nariya-86a620395" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover-glow"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-6">
            {/* Work Experience */}
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Work Experience</h2>
              <div className="space-y-4">
                {[
                  { year: "2023-Present", tech: "React JS", role: "Senior Developer", color: "from-cyan-400 to-blue-500" },
                  { year: "2022-2023", tech: "Node.js", role: "Backend Developer", color: "from-green-400 to-emerald-500" },
                  { year: "2021-2022", tech: "JavaScript", role: "Frontend Developer", color: "from-yellow-400 to-orange-500" },
                ].map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                    <span className="text-xs text-muted-foreground w-24">{exp.year}</span>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center`}>
                      <span className="text-xs font-bold text-white">{exp.tech.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{exp.tech}</h4>
                      <p className="text-xs text-muted-foreground">{exp.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expert Area */}
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <h2 className="font-display text-xl font-bold text-foreground mb-4">My Expert Area</h2>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "JavaScript", icon: "♨️" },
                  { name: "HTML", icon: "🟠" },
                  { name: "PHP", icon: "🐘" },
                  { name: "MongoDB", icon: "🍃" },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all hover-glow cursor-pointer"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

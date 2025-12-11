import { Code2, Palette, Rocket, Users } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces with focus on user experience.",
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, SEO, and better user engagement.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively with cross-functional teams to deliver quality products.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Services I <span className="text-gradient">Offered</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I specialize in building full-stack web applications with a focus on clean code, 
            beautiful interfaces, and exceptional user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="glass-card p-6 group hover-glow transition-all animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "4", label: "Projects Completed" },
            { value: "8", label: "Happy Clients" },
            { value: "0", label: "Years Experience" },
            { value: "8+", label: "Technologies" },
          ].map((stat, idx) => (
            <div key={idx} className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: `${0.4 + idx * 0.1}s` }}>
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

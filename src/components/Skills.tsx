const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "Bootstrap", level: 75 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 60 },
      { name: "Python", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "Git", level: 85 },
      { name: "Linux", level: 85 },
      { name: "MongoDB Compose", level: 85 },
      { name: "Prettier", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">My Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="glass-card p-6 animate-fade-in"
              style={{ animationDelay: `${catIdx * 0.2}s` }}
            >
              <h3 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-1000"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${catIdx * 0.2 + skillIdx * 0.1}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

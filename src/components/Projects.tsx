import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "IT Company Manageement",
    description: "The main objective of this project is to design and develop a professional website for a fictional IT company with separate User and Admin panels.",
    image: "/IT.jpg",
    tags: ["React", "Node.js", "Express.js", "HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Library Management Syatem",
    description: "A library management project involves creating a system to efficiently manage library resources, including books, journals, periodicals, and other materials, as well as member information and borrowing transactions.",
    image: "/Library.png",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Cafe Management System",
    description: "The Brew & Bite Café Management System is to design and develop an interactive,user-friendly web platform that streamlines the management and operation of a cafe.",
    image: "/cafe3.jpeg",
    tags: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "My Personal Portfolio",
    description: "React + Vite-based personal portfolio to showcase skills, projects, and professional information with interactive user experience. Features resume download, direct contact, and smooth navigation.",
    image: "/Portfolio.jpg",
    tags: ["React.js", "Vite", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating my skills in building modern web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:bg-primary/10">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

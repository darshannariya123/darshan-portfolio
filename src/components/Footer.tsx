import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">DN</span>
            </div>
            <span className="font-display font-semibold text-lg text-foreground">Darshan Nariya</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/darshannariya", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/darshan-nariya-86a620395", label: "LinkedIn" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all hover-glow"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Darshan Nariya
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

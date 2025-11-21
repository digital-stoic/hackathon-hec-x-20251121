import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-gradient">
              Finance Clash
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An educational game designed to make financial concepts fun and accessible.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Finance Clash. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-md">
              Finance Clash is an educational game designed to make financial concepts fun and accessible.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

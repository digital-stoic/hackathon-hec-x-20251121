import { NavLink } from "./NavLink";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="text-2xl font-bold tracking-tight">
            BNP
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="hover:text-accent transition-colors duration-300"
              activeClassName="text-accent font-semibold"
            >
              Accueil
            </NavLink>
            <NavLink
              to="/philanthropie"
              className="hover:text-accent transition-colors duration-300"
              activeClassName="text-accent font-semibold"
            >
              Philanthropie
            </NavLink>
            <NavLink
              to="/se-renseigner"
              className="hover:text-accent transition-colors duration-300"
              activeClassName="text-accent font-semibold"
            >
              Se Renseigner
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-primary/80 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className="hover:text-accent transition-colors duration-300 py-2"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </NavLink>
              <NavLink
                to="/philanthropie"
                className="hover:text-accent transition-colors duration-300 py-2"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Philanthropie
              </NavLink>
              <NavLink
                to="/se-renseigner"
                className="hover:text-accent transition-colors duration-300 py-2"
                activeClassName="text-accent font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Se Renseigner
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

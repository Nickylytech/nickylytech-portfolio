import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    setIsOpen(false);

    // Handle page navigation
    if (href === "/" || href === "/projects") {
      navigate(href);
      return;
    }

    // Handle anchor scroll (only on homepage)
    if (location.pathname === "/") {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on homepage, navigate home first then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/nickylytech-logo.png"
            alt="Nickylytech"
            className="h-12 w-auto object contain"
          />
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-foreground transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-foreground transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <div
          className={`absolute top-16 left-0 right-0 bg-background border-b border-border md:static md:flex md:gap-4 ${
            isOpen ? "flex flex-col p-4 gap-2" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="md:hidden"
          >
            <Button className="w-full">Get in Touch</Button>
          </a>
        </div>

        <a href="#contact" className="hidden md:block">
          <Button>Get in Touch</Button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

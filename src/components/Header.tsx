import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Fade direction="down" triggerOnce>
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold text-gold-gradient">
                LUXE
              </span>
              <span className="text-2xl font-serif font-light text-foreground">
                ESTATES
              </span>
            </a>
          </Fade>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Fade direction="down" cascade damping={0.1} triggerOnce>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors duration-300 tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </Fade>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Fade direction="down" triggerOnce delay={300}>
              <Button variant="gold-outline" size="lg">
                Schedule Viewing
              </Button>
            </Fade>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-gold/10">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-gold transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-4">
                Schedule Viewing
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

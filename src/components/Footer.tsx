import { Fade } from "react-awesome-reveal";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Properties: ["Luxury Homes", "Penthouses", "Estates", "Waterfront", "International"],
    Services: ["Buy", "Sell", "Invest", "Property Management", "Concierge"],
    Company: ["About Us", "Our Team", "Careers", "Press", "Contact"],
    Resources: ["Market Reports", "Guides", "Blog", "Newsletter", "Events"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-charcoal text-cream py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <Fade direction="up" triggerOnce>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <a href="#" className="flex items-center gap-2 mb-6">
                <span className="text-2xl font-serif font-bold text-gold-gradient">
                  LUXE
                </span>
                <span className="text-2xl font-serif font-light text-cream">
                  ESTATES
                </span>
              </a>
              <p className="text-cream/60 text-sm leading-relaxed mb-6 max-w-xs">
                Defining luxury real estate since 2009. We connect discerning
                clients with extraordinary properties worldwide.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-charcoal transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-serif font-semibold text-cream mb-4">
                  {title}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-cream/60 hover:text-gold transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Fade>

        {/* Bottom Bar */}
        <Fade direction="up" triggerOnce delay={200}>
          <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/50">
              © {new Date().getFullYear()} Luxe Estates. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-cream/50">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
};

export default Footer;

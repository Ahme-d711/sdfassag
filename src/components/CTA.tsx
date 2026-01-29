import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Fade direction="up" triggerOnce>
            <span className="text-gold font-medium tracking-[0.3em] text-sm uppercase">
              Start Your Journey
            </span>
          </Fade>
          
          <Slide direction="up" triggerOnce delay={100}>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Find Your Dream
              <span className="block text-gold-gradient">Property Today</span>
            </h2>
          </Slide>
          
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Whether you're looking to buy, sell, or invest, our team of experts
              is ready to guide you through every step of your luxury real estate
              journey.
            </p>
          </Fade>

          <Zoom triggerOnce delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="gold" size="xl" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="luxury" size="xl">
                Browse Properties
              </Button>
            </div>
          </Zoom>

          {/* Contact Info */}
          <Fade direction="up" triggerOnce delay={400}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8 border-t border-border">
              <a
                href="tel:+1-888-555-0123"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Phone size={20} className="text-gold" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Call Us
                  </div>
                  <div className="font-semibold text-foreground">
                    +1 (888) 555-0123
                  </div>
                </div>
              </a>
              
              <a
                href="mailto:hello@luxeestates.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={20} className="text-gold" />
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email Us
                  </div>
                  <div className="font-semibold text-foreground">
                    hello@luxeestates.com
                  </div>
                </div>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import { Button } from "@/components/ui/button";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-mansion.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury mansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <Fade direction="up" triggerOnce>
            <span className="inline-block text-gold font-medium tracking-[0.3em] text-sm mb-6 uppercase">
              Exceptional Properties
            </span>
          </Fade>

          <Slide direction="up" triggerOnce delay={100}>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-tight mb-6">
              Discover
              <span className="block text-gold-gradient">Extraordinary</span>
              Living
            </h1>
          </Slide>

          <Fade direction="up" triggerOnce delay={300}>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mb-10 leading-relaxed font-light">
              Experience unparalleled luxury with our curated collection of the
              world's most prestigious properties. Where your dream home awaits.
            </p>
          </Fade>

          <Fade direction="up" triggerOnce delay={500}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" className="group">
                Explore Properties
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="gold-outline"
                size="xl"
                className="group text-cream border-cream/50 hover:bg-cream/10 hover:text-cream"
              >
                <Play className="mr-2" size={18} />
                Watch Tour
              </Button>
            </div>
          </Fade>

          {/* Stats */}
          <Fade direction="up" triggerOnce delay={700}>
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-cream/20 max-w-2xl">
              {[
                { number: "500+", label: "Properties Sold" },
                { number: "$2B+", label: "Total Value" },
                { number: "15+", label: "Years Experience" },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-cream/60 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Zoom triggerOnce delay={1000}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </Zoom>
    </section>
  );
};

export default Hero;

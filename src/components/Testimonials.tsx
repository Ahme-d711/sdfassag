import { Fade, Slide } from "react-awesome-reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Victoria Hartwell",
    role: "Tech Executive",
    content:
      "Luxe Estates exceeded every expectation. They found us our dream oceanfront home in record time. Their attention to detail and market knowledge is unmatched.",
    rating: 5,
  },
  {
    name: "Jonathan & Sarah Chen",
    role: "Private Investors",
    content:
      "We've worked with many luxury agents, but none compare to the white-glove service at Luxe. They made our $15M acquisition seamless and stress-free.",
    rating: 5,
  },
  {
    name: "Michael Beaumont",
    role: "Film Producer",
    content:
      "From the first viewing to closing, the Luxe team was extraordinary. They understood our vision and delivered a property that perfectly matches our lifestyle.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-charcoal text-cream"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Fade direction="up" triggerOnce>
            <span className="text-gold font-medium tracking-[0.3em] text-sm uppercase">
              Testimonials
            </span>
          </Fade>
          <Slide direction="up" triggerOnce delay={100}>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mt-4 mb-6">
              Client Stories
            </h2>
          </Slide>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              Hear from those who have experienced the exceptional service that
              defines Luxe Estates.
            </p>
          </Fade>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fade direction="up" cascade damping={0.15} triggerOnce>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-charcoal-light p-8 rounded-lg border border-gold/20 hover:border-gold/40 transition-all duration-500 group"
              >
                <Quote className="w-10 h-10 text-gold/30 mb-6 group-hover:text-gold/50 transition-colors" />
                
                <p className="text-cream/80 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>
                
                {/* Author */}
                <div className="pt-4 border-t border-gold/10">
                  <div className="font-serif font-semibold text-cream">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gold">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

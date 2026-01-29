import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Shield, Award, Clock, Users, Globe, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Over 15 years of experience navigating the luxury real estate market with integrity and precision.",
  },
  {
    icon: Award,
    title: "Award-Winning Service",
    description:
      "Recognized internationally for exceptional client service and record-breaking transactions.",
  },
  {
    icon: Clock,
    title: "Dedicated Support",
    description:
      "24/7 personalized concierge service ensuring your every need is met with excellence.",
  },
  {
    icon: Users,
    title: "Elite Network",
    description:
      "Access to an exclusive network of high-net-worth buyers and off-market opportunities.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "International presence with offices in 25+ countries connecting you to properties worldwide.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Your vision drives everything we do, from property selection to seamless closing.",
  },
];

const Features = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Fade direction="up" triggerOnce>
            <span className="text-gold font-medium tracking-[0.3em] text-sm uppercase">
              Why Choose Us
            </span>
          </Fade>
          <Slide direction="up" triggerOnce delay={100}>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              The Luxe Difference
            </h2>
          </Slide>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We don't just sell properties—we craft extraordinary lifestyle
              experiences for discerning clients.
            </p>
          </Fade>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-lg border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-xl"
              >
                <Zoom triggerOnce delay={index * 50}>
                  <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-gold" />
                  </div>
                </Zoom>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Features;

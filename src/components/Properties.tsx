import { Fade, Slide } from "react-awesome-reveal";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    image: property1,
    title: "Sky Penthouse Suite",
    location: "Manhattan, New York",
    price: "$12,500,000",
    beds: 5,
    baths: 6,
    sqft: "8,500 sq ft",
  },
  {
    image: property2,
    title: "Oceanfront Villa",
    location: "Malibu, California",
    price: "$18,900,000",
    beds: 7,
    baths: 8,
    sqft: "12,000 sq ft",
  },
  {
    image: property3,
    title: "Historic Townhouse",
    location: "Georgetown, Washington DC",
    price: "$6,750,000",
    beds: 4,
    baths: 5,
    sqft: "5,200 sq ft",
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Fade direction="up" triggerOnce>
            <span className="text-gold font-medium tracking-[0.3em] text-sm uppercase">
              Featured Listings
            </span>
          </Fade>
          <Slide direction="up" triggerOnce delay={100}>
            <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              Exceptional Properties
            </h2>
          </Slide>
          <Fade direction="up" triggerOnce delay={200}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of the finest properties available,
              each representing the pinnacle of luxury living.
            </p>
          </Fade>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fade direction="up" cascade damping={0.15} triggerOnce>
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </Fade>
        </div>

        {/* View All Button */}
        <Fade direction="up" triggerOnce delay={500}>
          <div className="text-center mt-12">
            <Button variant="luxury" size="xl" className="group">
              View All Properties
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Properties;

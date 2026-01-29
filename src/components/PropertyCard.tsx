import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
}: PropertyCardProps) => {
  return (
    <div className="group bg-card rounded-lg overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500 border border-border hover:border-gold/30">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Price Badge */}
        <div className="absolute top-4 left-4 bg-gold text-charcoal px-4 py-2 rounded-sm font-semibold text-sm tracking-wide">
          {price}
        </div>
        
        {/* Quick View Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <Button variant="gold" className="w-full">
            View Details
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground mb-4">
          <MapPin size={14} className="text-gold" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bed size={16} className="text-gold" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bath size={16} className="text-gold" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Maximize size={16} className="text-gold" />
            <span>{sqft}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

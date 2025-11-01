import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Wear Confidence. <span className="text-accent">Wear S&S.</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Premium Men's Fashion for the Modern Man
        </p>
        <Link to="/#collections">
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 animate-fade-in font-semibold"
            style={{ animationDelay: '0.2s' }}
          >
            Shop the Collection
          </Button>
        </Link>
      </div>
    </section>
  );
};

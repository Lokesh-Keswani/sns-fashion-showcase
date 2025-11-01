import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedCollections } from "@/components/FeaturedCollections";
import { StyleHighlights } from "@/components/StyleHighlights";
import { ProductsGrid } from "@/components/ProductsGrid";
import { AboutSection } from "@/components/AboutSection";
import { Testimonials } from "@/components/Testimonials";
import { InstagramFeed } from "@/components/InstagramFeed";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCollections />
      <StyleHighlights />
      <ProductsGrid />
      <AboutSection />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

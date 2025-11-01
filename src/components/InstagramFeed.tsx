import { Instagram } from "lucide-react";

export const InstagramFeed = () => {
  const instagramImages = [
    "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=400",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400",
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Follow the Style</h2>
          <a 
            href="https://instagram.com/snsfashion.official" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @snsfashion.official
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <div 
              key={index}
              className="aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

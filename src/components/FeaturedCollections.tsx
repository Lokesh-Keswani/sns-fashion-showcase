export const FeaturedCollections = () => {
  const collections = [
    { name: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
    { name: "Hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400" },
    { name: "Jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400" },
    { name: "Oversized Tees", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400" },
    { name: "Streetwear", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400" },
  ];

  return (
    <section id="collections" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.name}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white font-semibold text-lg p-4">{collection.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

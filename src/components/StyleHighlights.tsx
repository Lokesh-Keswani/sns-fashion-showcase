import styleImage from "@/assets/style-highlights.jpg";

export const StyleHighlights = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">Built for Bold Men</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At S&S Fashion, we believe that style is more than just clothing—it's a statement. 
              Our collections are designed to help you own every moment with confidence and sophistication.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From everyday essentials to standout pieces, each item combines comfort with cutting-edge style, 
              ensuring you always look and feel your best.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={styleImage}
              alt="Style Highlights"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

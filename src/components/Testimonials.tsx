import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus J.",
      rating: 5,
      text: "The quality is outstanding! Every piece fits perfectly and the fabric feels premium. S&S Fashion has become my go-to brand."
    },
    {
      name: "David K.",
      rating: 5,
      text: "Finally found a brand that understands modern men's fashion. The designs are sleek, comfortable, and always get compliments."
    },
    {
      name: "Ryan P.",
      rating: 5,
      text: "From casual to statement pieces, S&S Fashion delivers every time. The attention to detail is incredible."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

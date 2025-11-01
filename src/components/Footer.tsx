

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">S&S Fashion</h3>
            <p className="text-sm opacity-80">
              Premium men's clothing for the modern, confident man.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="/#collections" className="opacity-80 hover:opacity-100 transition-opacity">Collections</a></li>
              <li><a href="/#new-arrivals" className="opacity-80 hover:opacity-100 transition-opacity">New Arrivals</a></li>
              <li><a href="/#about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Shipping Info</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Returns</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Size Guide</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 S&S Fashion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

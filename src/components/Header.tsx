import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold tracking-tight">S&S Fashion</h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
            Home
          </Link>
          <Link to="/#collections" className="text-sm font-medium transition-colors hover:text-accent">
            Collections
          </Link>
          <Link to="/#new-arrivals" className="text-sm font-medium transition-colors hover:text-accent">
            New Arrivals
          </Link>
          <Link to="/#about" className="text-sm font-medium transition-colors hover:text-accent">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <CartDrawer />
        </div>
      </div>
    </header>
  );
};

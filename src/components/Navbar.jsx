import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Cart from "./Cart";
import useCartStore from "../store/cartStore";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-primary">
                <img src="/gulak-fin-logo.png" alt="logo" class="width-150" />
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2">
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-primary px-3 py-2">
                Products
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2">
                Contact
              </Link>
              <Link to="/track-order" className="text-gray-700 hover:text-primary px-3 py-2">
                Track Order
              </Link>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-white shadow-md">
            <div className="flex flex-col items-center space-y-2 py-4">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="text-gray-700 hover:text-primary px-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link to="/track-order" className="text-gray-700 hover:text-primary px-3 py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Track Order
              </Link>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </Button>
            </div>
          </div>
        )}
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;

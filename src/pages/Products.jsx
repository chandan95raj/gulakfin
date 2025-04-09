
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import useCartStore from "../store/cartStore";
import { useToast } from "../components/ui/use-toast";

const Products = () => {
  const addItem = useCartStore((state) => state.addItem);
  const { toast } = useToast();
  
  const products = [
    {
      id: 1,
      name: "MATM Feather Touch",
      price: "₹4,999.00",
      description: "Advanced MATM device with feather touch technology for seamless transactions.",
      src:"https://www.purnpay.com/images/products/UCube.jpg"
    },
    {
      id: 2,
      name: "MATM Pro",
      price: "₹2,999.00",
      description: "Professional-grade MATM device for businesses.",
      src:"https://www.purnpay.com/images/products/MosambeeQPOS.jpg"
    },
    {
      id: 3,
      name: "MATM Lite",
      price: "₹1,999.00",
      description: "Compact and efficient MATM solution for small businesses.",
      src:"https://www.purnpay.com/images/products/Morefunlite.jpg"
    },
    {
      id: 4,
      name: "BT Printer",
      price: "₹1,999.00",
      description: "Reliable Bluetooth printer for instant receipts.",
      src:"https://www.purnpay.com/images/products/BTPrinter.jpg"
    },
    {
      id: 5,
      name: "BT 2 in 1 Printer",
      price: "₹4,499.00",
      description: "Versatile 2-in-1 Bluetooth printer solution.",
      src:"https://www.purnpay.com/images/products/BTAEPSPrinter.jpg"
    },
    {
      id: 6,
      name: "MATM All in One",
      price: "₹12,499.00",
      description: "Complete MATM solution with integrated features.",
      src:"https://www.purnpay.com/images/products/MF919.jpg"
    },
    {
      id: 7,
      name: "MATM All in One Pro",
      price: "₹15,499.00",
      description: "Premium all-in-one MATM solution with advanced features.",
      src:"https://www.purnpay.com/images/products/MF220.jpg"
    },
  ];

  const handleAddToCart = (product) => {
    addItem(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img  
                className="w-full h-64 object-cover"
                alt={`${product.name} - Gulak Fin Shop Product`}
                src={`${product.src}`} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;

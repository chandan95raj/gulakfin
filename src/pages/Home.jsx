
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "MATM Feather Touch",
      price: "₹4,999.00",
      description: "Premium MATM device with advanced touch technology",
      src:"https://www.purnpay.com/images/products/UCube.jpg"
    },
    {
      id: 2,
      name: "MATM All in One Pro",
      price: "₹15,499.00",
      description: "Complete professional MATM solution",
      src:"https://www.purnpay.com/images/products/MF220.jpg"
    },
    {
      id: 3,
      name: "BT 2 in 1 Printer",
      price: "₹4,499.00",
      description: "Versatile printing solution for your business",
      src:"https://www.purnpay.com/images/products/BTAEPSPrinter.jpg"
    },
  ];

  return (
    <div>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Gulak Fin Shop
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your Trusted Source for Premium Payment Solutions
            </p>
            <Link to="/products">
              <Button size="lg" className="text-lg px-8">
                Shop Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: product.id * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img  
                    className="w-full h-48 object-cover"
                    alt={`${product.name} - Featured Product`}
                   src={`${product.src}`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{product.price}</span>
                    <Link to="/products">
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Gulak Fin Shop?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
                <p className="text-gray-600">
                  We offer only the highest quality MATM devices and printers.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable delivery across India.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Expert Support</h3>
                <p className="text-gray-600">
                  24/7 technical support for all our products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

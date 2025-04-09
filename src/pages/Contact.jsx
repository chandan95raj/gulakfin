
import React from "react";
import { Button } from "../components/ui/button";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              CW-59 FIRST FLOOR, SGT NAGAR, NEW DELHI, 110042
            </p>
            <p>
              <strong>Email:</strong><br />
              info@gulakfin.in
            </p>
            <p>
              <strong>Phone:</strong><br />
              +91 9460978726
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

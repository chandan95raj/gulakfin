
import React from "react";

const Terms = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using Gulak Fin Shop, you accept and agree to be bound by these
            Terms and Conditions and our Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Products and Services</h2>
          <p className="mb-4">
            All products and services are subject to availability. We reserve the right to
            discontinue any product at any time.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Prices are subject to change without notice</li>
            <li>Product descriptions are accurate to the best of our knowledge</li>
            <li>Images are representative and may vary from actual products</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Orders and Payment</h2>
          <p className="mb-4">
            By placing an order, you warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You are legally capable of entering into binding contracts</li>
            <li>You are at least 18 years old</li>
            <li>The information you provide is accurate and complete</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
          <p className="mb-4">
            We aim to deliver products within the estimated timeframe. However, delays may
            occur due to unforeseen circumstances.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
          <p className="mb-4">
            Please refer to our Refund Policy for detailed information about returns and
            refunds.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
          <p className="mb-4">
            For any questions regarding these terms, please contact us at:
          </p>
          <ul className="list-none mb-4">
            <li>Email: info@gulakfin.in</li>
            <li>Phone: +91 9460978726</li>
            <li>Address: CW-59 FIRST FLOOR, SGT NAGAR, NEW DELHI, 110042</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Terms;

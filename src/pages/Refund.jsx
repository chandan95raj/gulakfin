
import React from "react";

const Refund = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Refund Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Return Period</h2>
          <p className="mb-4">
            We accept returns within 7 days of delivery for most products, provided they are:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>In original condition</li>
            <li>Unused and unopened</li>
            <li>With original packaging and accessories</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Refund Process</h2>
          <p className="mb-4">
            Once we receive your return:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>We will inspect the product</li>
            <li>Process the refund within 5-7 business days</li>
            <li>Notify you via email when the refund is processed</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Items</h2>
          <p className="mb-4">
            The following items are non-refundable:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Customized or personalized products</li>
            <li>Products with broken seals</li>
            <li>Products damaged due to misuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Shipping Costs</h2>
          <p className="mb-4">
            Original shipping charges are non-refundable. Return shipping costs must be borne
            by the customer unless the return is due to our error.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="mb-4">
            For any questions about our refund policy, please contact us at:
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

export default Refund;


import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            At Gulak Fin Shop, we collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Billing and shipping address</li>
            <li>Payment information</li>
            <li>Order history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your orders and payments</li>
            <li>Communicate with you about your orders</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our products and services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. We may share your
            information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Payment processors</li>
            <li>Shipping partners</li>
            <li>Service providers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our Privacy Policy, please contact us at:
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

export default Privacy;

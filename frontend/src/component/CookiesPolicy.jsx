import React from "react";

const CookiesPolicy = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Cookies Policy
      </h1>

      <p className="text-gray-600 text-sm text-center mb-10">
        Last Updated: March 2025
      </p>

      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Section 1 - Introduction */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          1. Introduction
        </h2>
        <p className="text-gray-600 mb-4">
          Welcome to <strong>MakeUsTrip</strong>. This Cookies Policy explains
          how we use cookies and similar tracking technologies when you visit
          our website.
        </p>

        {/* Section 2 - What Are Cookies? */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          2. What Are Cookies?
        </h2>
        <p className="text-gray-600 mb-4">
          Cookies are small text files stored on your device when you visit a
          website. They help us improve your experience by remembering your
          preferences and enabling certain website functionalities.
        </p>

        {/* Section 3 - How We Use Cookies */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          3. How We Use Cookies
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>To remember your login and preferences.</li>
          <li>To analyze website traffic and improve performance.</li>
          <li>To provide personalized travel recommendations.</li>
          <li>To enhance security and prevent fraudulent activities.</li>
        </ul>

        {/* Section 4 - Types of Cookies We Use */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          4. Types of Cookies We Use
        </h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li><strong>Essential Cookies:</strong> Required for website functionality.</li>
          <li><strong>Performance Cookies:</strong> Help us analyze site traffic.</li>
          <li><strong>Functional Cookies:</strong> Store your preferences.</li>
          <li><strong>Advertising Cookies:</strong> Personalize ads and promotions.</li>
        </ul>

        {/* Section 5 - Managing Cookies */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          5. Managing Your Cookies Preferences
        </h2>
        <p className="text-gray-600 mb-4">
          You can accept or reject cookies through your browser settings. Disabling some cookies may affect your experience on our site.
        </p>

        {/* Section 6 - Third-Party Cookies */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          6. Third-Party Cookies
        </h2>
        <p className="text-gray-600 mb-4">
          We may use third-party services, like Google Analytics and social media plugins, that set their own cookies.
        </p>

        {/* Section 7 - Updates to This Policy */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          7. Updates to This Policy
        </h2>
        <p className="text-gray-600 mb-4">
          We may update this policy from time to time. Please review it regularly for any changes.
        </p>

        {/* Section 8 - Contact Information */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">
          8. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have any questions, contact us at:{" "}
          <a href="mailto:support@makeustrip.in" className="text-blue-600">
            support@makeustrip.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default CookiesPolicy;

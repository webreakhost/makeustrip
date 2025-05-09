import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Terms of Service</h1>

      
      <div className="bg-white shadow-md rounded-lg p-6">
        {/* Section 1 - Introduction */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">1. Introduction</h2>
        <p className="text-gray-600 mb-4">
          Welcome to <strong>MakeUsTrip</strong>. By using our services, you agree to our terms and conditions outlined below. Please read them carefully.
        </p>

        {/* Section 2 - User Responsibilities */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">2. User Responsibilities</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Users must provide accurate information while booking.</li>
          <li>Unauthorized use of our platform is strictly prohibited.</li>
          <li>Users should comply with local laws while traveling.</li>
        </ul>

        {/* Section 3 - Booking & Cancellation */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">3. Booking & Cancellation Policy</h2>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Bookings are confirmed only after full payment.</li>
          <li>Cancellations may be subject to a fee as per our policy.</li>
          <li>Refunds (if applicable) will be processed within 7-10 days.</li>
        </ul>

        {/* Section 4 - Liability Disclaimer */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">4. Liability Disclaimer</h2>
        <p className="text-gray-600 mb-4">
          MakeUsTrip is not responsible for any travel disruptions, accidents, or loss of personal belongings. Users are advised to have travel insurance.
        </p>

        {/* Section 5 - Changes to Terms */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">5. Changes to Terms</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to update our terms at any time. Continued use of our services implies acceptance of the latest terms.
        </p>

        {/* Section 6 - Contact Information */}
        <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-4">6. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about our terms, please contact us at: 
          <a href="mailto:support@makeustrip.in" className="text-blue-600"> support@makeustrip.in</a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;

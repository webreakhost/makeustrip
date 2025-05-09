import React from "react";
import { FaHotel, FaCar, FaHome, FaPlane, FaCreditCard } from "react-icons/fa";

const paymentDetails = [
  {
    id: 1,
    type: "Hotel Booking",
    amount: "$250.00",
    date: "March 15, 2024",
    icon: <FaHotel size={30} className="text-blue-500" />,
    status: "Paid",
  },
  {
    id: 2,
    type: "Cabs Booking",
    amount: "$40.00",
    date: "March 18, 2024",
    icon: <FaCar size={30} className="text-green-500" />,
    status: "Pending",
  },
  {
    id: 3,
    type: "Rental Booking",
    amount: "$120.00",
    date: "March 22, 2024",
    icon: <FaHome size={30} className="text-yellow-500" />,
    status: "Paid",
  },
  {
    id: 4,
    type: "Flight Booking",
    amount: "$550.00",
    date: "March 25, 2024",
    icon: <FaPlane size={30} className="text-red-500" />,
    status: "Failed",
  },
];

const PaymentDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Payment Details
      </h2>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentDetails.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-300 hover:bg-gray-50"
              >
                <td className="p-3 flex items-center space-x-2">
                  {item.icon}
                  <span>{item.type}</span>
                </td>
                <td className="p-3">{item.amount}</td>
                <td className="p-3">{item.date}</td>
                <td
                  className={`p-3 font-semibold ${
                    item.status === "Paid"
                      ? "text-green-600"
                      : item.status === "Pending"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 mx-auto hover:bg-blue-700">
          <FaCreditCard />
          <span>Proceed to Payment</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;

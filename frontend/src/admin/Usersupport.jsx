import React, { useEffect, useState } from "react";
import { FaEnvelope, FaUser, FaSpinner } from "react-icons/fa";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const Usersupport = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/api/v1/contacts/allmsg`);
        setMessages(response.data.data); // Assuming 'data.data' contains the messages array
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch messages. Please try again later.");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <FaSpinner className="animate-spin text-4xl text-blue-600" />
        <span className="ml-4 text-lg text-blue-600">Loading messages...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        User Support
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-4 md:p-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">Name</th>
                {/* <th className="py-3 px-4 text-left">Email</th> */}
                <th className="py-3 px-4 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <tr
                    key={msg._id}
                    className={`hover:bg-blue-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } cursor-pointer`}
                    onClick={() => setSelectedMessage(msg)}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 flex items-center gap-2">
                      <FaUser className="text-blue-500" />
                      {msg.firstName} {msg.lastName}
                    </td>
                    {/* <td className="py-3 px-4 flex items-center gap-2">
                      <FaEnvelope className="text-green-500" />
                      {msg.email}
                    </td> */}
                    <td className="py-3 px-4 truncate max-w-xs">{msg.message} (click on message)</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-4 px-4 text-center text-gray-500"
                  >
                    No messages found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedMessage && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Message Details
            </h2>
            <p>
              <strong>Name: </strong>
              {selectedMessage.firstName} {selectedMessage.lastName}
            </p>
            <p>
              <strong>Email: </strong>
              {selectedMessage.email}
            </p>
            <p>
              <strong>Phone: </strong>
              {selectedMessage.phoneNumber || "N/A"}
            </p>
            <p>
              <strong>Message: </strong>
              {selectedMessage.message}
            </p>
            <p>
              <strong>Date: </strong>
              {new Date(selectedMessage.createdAt).toLocaleString()}
            </p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setSelectedMessage(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Usersupport;

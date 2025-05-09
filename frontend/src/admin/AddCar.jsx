import React, { useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const AddCar = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    image: null,
    seats: "",
    ac: "Yes",
    kmIncluded: "",
    kmRate: "",
    price: "",
    originalPrice: "",
    discount: "No Discount",
    cancellation: "Non-refundable",
    transmission: "Manual",
    luggage: "",
    fuel: "Petrol",
    reviews: 0,
    rating: 0,
    isBooked: false,
    location: "",
    bookingDetails: {
      userId: "",
      fromDate: "",
      toDate: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle nested bookingDetails changes
  const handleBookingDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      bookingDetails: { ...formData.bookingDetails, [name]: value },
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();

    // Append all fields to FormData
    Object.keys(formData).forEach((key) => {
      if (key === "image") {
        data.append(key, formData.image);
      } else if (key === "bookingDetails") {
        data.append("bookingDetails", JSON.stringify(formData.bookingDetails));
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(
        BACKENDURL + 
        "/api/v1/cars/addcar",
        data
      );
      setMessage(response.data.message || "Car added successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error adding car.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Car</h2>
      {message && (
        <p className="mb-4 text-center text-green-600 font-semibold">{message}</p>
      )}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Car Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Car Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Seats</label>
            <input
              type="number"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Air Conditioning</label>
            <select
              name="ac"
              value={formData.ac}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label>KM Included</label>
            <input
              type="number"
              name="kmIncluded"
              value={formData.kmIncluded}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Rate per KM</label>
            <input
              type="number"
              name="kmRate"
              value={formData.kmRate}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Price per Day</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Transmission</label>
            <select
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          <div>
            <label>Fuel Type</label>
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div>
            <label>Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label>Cancellation Policy</label>
            <input
              type="text"
              name="cancellation"
              value={formData.cancellation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
        >
          {loading ? "Adding Car..." : "Add Car"}
        </button>
      </form>
    </div>
  );
};

export default AddCar;

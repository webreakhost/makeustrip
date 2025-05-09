import React, { useState } from "react";
import axios from "axios";
import { BACKENDURL } from "../Config/Config";

const AddRoom = () => {
  const [formData, setFormData] = useState({
    hotelName: "",
    type: "",
    description: "",
    amenities: "",
    sleeps: "",
    bedType: "",
    price: "",
    originalPrice: "",
    discount: "",
    floor: "",
    size: "",
    views: "",
    smokingPolicy: "",
    isRefundable: false,
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, images: files });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Append all form fields to FormData
      for (const key in formData) {
        if (key === "images") {
          for (let i = 0; i < formData.images.length; i++) {
            formDataToSend.append("images", formData.images[i]);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      // Send data to the backend
      const response = await axios.post(BACKENDURL + "/api/V1/rooms/add", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(response.data);
      alert("Room added successfully!");
    } catch (error) {
      console.error(error.response?.data || "Error adding room");
      alert("Failed to add room. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Room</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* Hotel Name */}
        <div>
          <label className="block mb-2">Hotel Name</label>
          <input
            type="text"
            name="hotelName"
            value={formData.hotelName}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Room Type */}
        <div>
          <label className="block mb-2">Room Type</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Description */}
        <div className="col-span-2">
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

        {/* Amenities */}
        <div>
          <label className="block mb-2">Amenities (comma-separated)</label>
          <input
            type="text"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Sleeps */}
        <div>
          <label className="block mb-2">Sleeps</label>
          <input
            type="number"
            name="sleeps"
            value={formData.sleeps}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Bed Type */}
        <div>
          <label className="block mb-2">Bed Type</label>
          <input
            type="text"
            name="bedType"
            value={formData.bedType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Original Price */}
        <div>
          <label className="block mb-2">Original Price</label>
          <input
            type="number"
            name="originalPrice"
            value={formData.originalPrice}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Discount */}
        <div>
          <label className="block mb-2">Discount</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Image Upload */}
        <div className="col-span-2">
          <label className="block mb-2">Upload Images</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Refundable */}
        <div>
          <label className="block mb-2">Is Refundable?</label>
          <input
            type="checkbox"
            name="isRefundable"
            checked={formData.isRefundable}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Yes</span>
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRoom;

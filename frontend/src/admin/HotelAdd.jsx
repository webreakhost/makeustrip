



import React, { useState } from 'react';
import axios from 'axios';
import { BACKENDURL } from '../Config/Config';

const HotelAdd = () => {
  const [hotelData, setHotelData] = useState({
    name: '',
    address: '',
    city: '',
    distance: '',
    rating: '',
    price: '',
    originalPrice: '',
    discount: '',
    reviews: '',
    cancellationPolicy: '',
    amenities: [],
  });

  const [amenity, setAmenity] = useState('');
  const [thumbnail, setThumbnail] = useState(null); // Store the thumbnail file here
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHotelData({
      ...hotelData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle amenity addition
  const handleAddAmenity = () => {
    if (amenity.trim()) {
      setHotelData({
        ...hotelData,
        amenities: [...hotelData.amenities, amenity.trim()],
      });
      setAmenity('');
    }
  };

  // Handle file selection
  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Map freeCancellation to cancellationPolicy
    const updatedHotelData = {
      ...hotelData,
      cancellationPolicy: hotelData.freeCancellation ? 'Yes' : 'No',
    };

    const formData = new FormData();
    formData.append('name', updatedHotelData.name);
    formData.append('address', updatedHotelData.address);
    formData.append('city', updatedHotelData.city);
    formData.append('distance', updatedHotelData.distance);
    formData.append('rating', updatedHotelData.rating);
    formData.append('price', updatedHotelData.price);
    formData.append('originalPrice', updatedHotelData.originalPrice);
    formData.append('discount', updatedHotelData.discount);
    formData.append('reviews', updatedHotelData.reviews);
    formData.append('cancellationPolicy', updatedHotelData.cancellationPolicy);
    formData.append('thumbnail', thumbnail); // Append the thumbnail file
    updatedHotelData.amenities.forEach((amenity, index) =>
      formData.append('amenities', amenity)
    );

    try {
      const response = await axios.post(`${BACKENDURL}/api/v1/hotels/hotel`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      setSuccessMessage('Hotel added successfully!');
      setErrorMessage('');
      setHotelData({
        name: '',
        address: '',
        city: '',
        distance: '',
        rating: '',
        price: '',
        originalPrice: '',
        discount: '',
        reviews: '',
        cancellationPolicy: '',
        amenities: [],
      });
      setThumbnail(null); // Reset thumbnail
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Error adding hotel');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for hotel data */}
        {/* Add other fields as necessary */}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Hotel Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={hotelData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={hotelData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={hotelData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="distance" className="form-label">Distance from City Center (Km)</label>
          <input
            type="number"
            className="form-control"
            id="distance"
            name="distance"
            value={hotelData.distance}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={hotelData.rating}
            onChange={handleChange}
            step="0.1"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price per Night (USD)</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={hotelData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="originalPrice" className="form-label">Original Price</label>
          <input
            type="number"
            className="form-control"
            id="originalPrice"
            name="originalPrice"
            value={hotelData.originalPrice}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="discount" className="form-label">Discount</label>
          <input
            type="text"
            className="form-control"
            id="discount"
            name="discount"
            value={hotelData.discount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reviews" className="form-label">Reviews</label>
          <input
            type="number"
            className="form-control"
            id="reviews"
            name="reviews"
            value={hotelData.reviews}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="freeCancellation"
            name="freeCancellation"
            checked={hotelData.freeCancellation}
            onChange={handleChange}
          />
          <label htmlFor="freeCancellation" className="form-check-label">Free Cancellation</label>
        </div>

        <div className="mb-3">
          <label htmlFor="amenities" className="form-label">Amenities</label>
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              id="amenities"
              value={amenity}
              onChange={(e) => setAmenity(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary ms-2"
              onClick={handleAddAmenity}
            >
              Add
            </button>
          </div>
          <ul className="mt-2">
            {hotelData.amenities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <label htmlFor="thumbnail" className="form-label">Thumbnail</label>
          <input
            type="file"
            className="form-control"
            id="thumbnail"
            name="thumbnail"
            onChange={handleThumbnailChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Add Hotel</button>
      </form>

      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
    </div>
  );
};

export default HotelAdd;

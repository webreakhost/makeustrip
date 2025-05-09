

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BACKENDURL } from "../../Config/Config";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// Load your Stripe publishable key
const stripePromise = loadStripe("pk_test_51PsRJh07rudxqA9k9QA5TJH2XdoB02HVd6LD3N40byZh76tNcEA1OE8GSQEnAdlUNX5TmomOg7BKe20jLbZO3tOs006HF8EjRK");

const Bookingform = () => {
  const location = useLocation();
  const { room, hotelName, transactionDetails } = location.state || {};

  const [guests, setGuests] = useState([
    { firstName: "", lastName: "", dateOfBirth: "", passportNumber: "", phone: "",  Email:""},
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const addGuest = () => {
    setGuests([
      ...guests,
      { firstName: "", lastName: "", dateOfBirth: "", passportNumber: "",phone: "",  Email:"" },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedGuests = guests.map((guest, i) =>
      i === index ? { ...guest, [field]: value } : guest
    );
    setGuests(updatedGuests);
  };

  const removeGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const handleSubmit = async (stripe, elements) => {
    setIsSubmitting(true);

    if (!stripe || !elements) {
      console.error("Stripe or Elements not loaded");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error("Error creating payment method:", error);
      alert(error.message);
      setIsSubmitting(false);
      return;
    }

    const bookingDetails = {
      room,
      hotelName,
      transactionDetails,
      guests,
      paymentMethodId: paymentMethod.id,
    };

    try {
      const authToken = localStorage.getItem("token");
      const response = await fetch(`${BACKENDURL}/api/v1/bookings/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(bookingDetails),
      });

      const result = await response.json();

      if (result.success) {
        alert("Booking successful!");
      } else {
        alert("Payment failed: " + result.message);
      }
    } catch (err) {
      console.error("Error submitting booking:", err);
      alert("An error occurred while processing your booking.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <section className="pt-4 gray-simple position-relative">
        <div className="card p-3 mb-xl-0 mb-lg-0 mb-3">
          {/* Room and Booking Details (Same as Above) */}

          <div className="card-box list-layout-block border br-dashed rounded-3 p-2">
            <div className="row">
              {/* Room Image */}
              <div className="col-xl-4 col-lg-3 col-md">
                <div className="cardImage__caps rounded-2 overflow-hidden h-100">
                  <img
                    src={`${BACKENDURL}/${room.images[0]}`} // First image from the array
                    className="img-fluid rounded-2 col-xl-12 h-100 object-fit w-full"
                    alt={room.type}
                  />
                </div>
              </div>

              {/* Room Details */}
              <div className="col-xl col-lg col-md">
                <div className="listLayout_midCaps mt-md-0 mt-3 mb-md-0 mb-3">

                  
                  <h4 className="fs-5 fw-bold mb-1">{hotelName || "Hotel Name Unavailable"}</h4>

                  <div className="d-flex align-items-center mb-3">
                    <div className="col-auto">
                      <div className="square--40 rounded-2 bg-primary text-light fw-semibold">{room.type}</div>
                    </div>
                    <div className="col-auto text-start ps-2">
                      <div className="text-md text-dark fw-medium">{room.amenities.join(", ")}</div>

                    </div>
                  </div>
                  <div className="position-relative mt-3">

                  </div>
                  {/* Room Description */}
                  <div className="mt-3">
                    <h6 className="fw-semibold">Description</h6>
                    <p className="text-muted-2">{room.description}</p>
                  </div>
                  {/* Room Price */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <p className="text-muted-2 mb-1"><s>₹{room.originalPrice}</s></p>
                      <h4 className="fw-bold text-primary">₹{room.price}</h4>
                      <p className="text-success">{room.discount}% Off</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="container">
          <h4>Guest Details</h4>
          <div className="row align-items-start">
            <div className="col-xl-8 col-lg-8 col-md-12">
              {guests.map((guest, index) => (
                <div className="card mb-3" key={index}>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4>Guest {index + 1}</h4>
                  {guests.length > 1 && (
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeGuest(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          value={guest.firstName}
                          onChange={(e) =>
                            handleInputChange(index, "firstName", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          value={guest.lastName}
                          onChange={(e) =>
                            handleInputChange(index, "lastName", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          value={guest.dateOfBirth}
                          onChange={(e) =>
                            handleInputChange(index, "dateOfBirth", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Passport Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Passport Number"
                          value={guest.passportNumber}
                          onChange={(e) =>
                            handleInputChange(index, "passportNumber", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="email"
                          value={guest.Email}
                          onChange={(e) =>
                            handleInputChange(index, "Email", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
              <button className="btn btn-secondary" onClick={addGuest}>
                Add Guest
              </button>
            </div>
            

<div className="col-xl-4 col-lg-4 col-md-12 bg-gray-50 p-6 rounded-lg shadow-lg">
      <h5 className="text-xl font-semibold mb-4 text-gray-800">Reservation Summary</h5>
      <p className="text-gray-700 mb-2">Hotel: <span className="font-medium">{hotelName}</span></p>
      <p className="text-gray-700 mb-4">Total Price: <span className="font-medium">₹{transactionDetails.totalPrice}</span></p>

      {/* Stripe Payment Form */}
      <Elements stripe={stripePromise}>
        <PaymentForm
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </Elements>
    </div>
          </div>
        </div>
      </section>
    </div>
  );
};


const PaymentForm = ({ handleSubmit, isSubmitting }) => {
  const stripe = useStripe();
  const elements = useElements();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(stripe, elements);
      }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <div className="mb-4">
        <label
          htmlFor="cardElement"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Card Details
        </label>
        <div className="p-3 border border-gray-300 rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
          <CardElement
            id="cardElement"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: { color: "#9e2146" },
              },
            }}
            className="outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-lg text-white ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

// export default PaymentForm;


export default Bookingform;



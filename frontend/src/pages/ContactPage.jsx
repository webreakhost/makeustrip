




// import React, { useState } from "react";
// import { FaUser, FaPhone, FaHandshake, FaGlobe } from "react-icons/fa";
// import axios from "axios";
// import { BACKENDURL } from "../Config/Config";
// import Head from "../component/Head";

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`${BACKENDURL}/api/v1/contacts/contact`, formData);
//       alert(response.data.message);
//       setFormData({ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <>
//     <Head
//         title="Contact Us - Make Us Trip"
//         description="Get in touch with Make Us Trip for bookings, queries, or support. We're here to help you plan your perfect trip."
//         keywords="contact make us trip, travel support, booking help, customer service, make us trip contact"
//         image="https://www.makeustrip.in/contact-banner.png"
//         url="https://www.makeustrip.in/contact"
//       />
//     <div className="max-w-7xl mx-auto px-6 py-12">
      

//       <section className="mt-16 bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Get in Touch</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               { label: "First Name", name: "firstName", type: "text" },
//               { label: "Last Name", name: "lastName", type: "text" },
//             ].map((field, index) => (
//               <div key={index}>
//                 <label className="block text-gray-700">{field.label}</label>
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
//                   placeholder={field.label}
//                 />
//               </div>
//             ))}
//           </div>
//           <div>
//             <label className="block text-gray-700">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
//               placeholder="email@domain.com"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
//               placeholder="Phone number"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Your Message</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200 h-24"
//               placeholder="Leave us a message..."
//             ></textarea>
//           </div>
//           <div className="flex items-center">
//             <input type="checkbox" className="mr-2" />
//             <p className="text-sm text-gray-600">
//               Agree to our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>
//             </p>
//           </div>
//           <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">Send Message</button>
//         </form>
//       </section>

//       <section className="mt-16 text-center">
//         <h2 className="text-3xl font-semibold text-gray-900">Visit Us at Our Location</h2>
//         <div className="mt-6 rounded-lg overflow-hidden shadow-lg">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0198443470863!2d-122.4194154846811!3d37.77492927975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2e4e7b6b%3A0x56c3db0d3ff7abcb!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1631884478239!5m2!1sen!2sin"
//             width="100%"
//             height="400"
//             allowFullScreen=""
//             loading="lazy"
//             title="Google Map"
//             className="w-full"
//           ></iframe>
//         </div>
//       </section>
//     </div>
//     </>
    
//   );
// };

// export default ContactPage;







import React, { useState } from 'react';
import { BACKENDURL } from '../Config/Config';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch(BACKENDURL + '/api/v1/contacts/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setResponseMessage(data.message || 'Failed to send your message. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section
            className="bg-cover position-relative"
            style={{ background: 'url(assets/img/bg-title.jpg) no-repeat' }}
            data-overlay="5"
        >
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-xl-7 col-lg-9 col-md-12">
                        <div className="fpc-capstion text-center my-4">
                            <div className="fpc-captions">
                                <h1 className="xl-heading text-light">Get-in Touch</h1>
                                <p className="text-light">
                                    Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first
                                    Oration against Catiline is taken for type specimens
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="gray-simple">
      <div className="container">

        <div className="row align-items-center justify-content-between g-4">

          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="contactForm">
              <form>
                <div className="row align-items-center">

                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="touch-block d-flex flex-column mb-4">
                      <h2>Drop Us a Line</h2>
                      <p>Get in touch via form below and we will reply as soon as we can.</p>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">eMail ID</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Phone No.</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="form-group">
                      <label className="form-label">Your Query</label>
                      <textarea
                        className="form-control ht-120"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {responseMessage && (
                    <div className="col-12 mb-2">
                      <p className="text-success">{responseMessage}</p>
                    </div>
                  )}

                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="form-group mb-0">
                      <button
                        type="button"
                        className="btn fw-medium btn-primary"
                        onClick={handleSubmit}
                        disabled={loading}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                        <i className="fa-solid fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="card p-4 rounded-4 border br-dashed text-center mb-4">
              <div className="crds-icons d-inline-flex mx-auto mb-3 text-primary fs-2">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="crds-desc">
                <h5>Drop a Mail</h5>
                <p className="text-md lh-2 mb-0">
                  Themezhub@gmail.com<br />Paythemezhub@gmail.com
                </p>
              </div>
            </div>

            <div className="card p-4 rounded-4 border br-dashed text-center">
              <div className="crds-icons d-inline-flex mx-auto mb-3 text-primary fs-2">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="crds-desc">
                <h5>Call Us</h5>
                <p className="text-md lh-2 mb-0">
                  (0522) 2563568<br />+91 256 6548 457
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          <div className="col-12">
            <iframe
              className="full-width ht-400 grayscale rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
    </>
    
  );
};

export default ContactPage;

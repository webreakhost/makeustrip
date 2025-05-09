




import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap'; // Using React-Bootstrap for modal management
import { BACKENDURL } from '../Config/Config';

const Signup = ({ showSignupModal, setShowSignupModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      setLoading(true);

      // API call to register user
      const response = await axios.post(BACKENDURL + "/api/v1/auth/register", {
        name,
        email,
        password,
      });

      setSuccessMessage(response.data.message);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      setErrorMessage(err.response?.data?.error || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Modal component */}
      <Modal show={showSignupModal} onHide={() => setShowSignupModal(false)} centered>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-6">Sign Up</h4>
            <button
              type="button"
              className="text-muted fs-4"
              onClick={() => setShowSignupModal(false)}
            >
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-signup-form py-4 px-md-3 px-0">
              <form onSubmit={handleSubmit}>
                {/* Display success or error messages */}
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                {successMessage && <p className="text-success">{successMessage}</p>}

                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Full Name</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label>Password</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <label>Confirm Password</label>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary full-width font--bold btn-lg"
                    disabled={loading}
                  >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                  </button>
                </div>
              </form>
            </div>

            
          </div>
          <div className="modal-footer align-items-center justify-content-center">
            <p>
              Already have an account?
              <a
                href="#"
                className="text-primary fw-medium ms-1"
                onClick={() => {
                  setShowSignupModal(false);
                  // Optionally open the login modal here
                }}
              >
                Log In
              </a>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;

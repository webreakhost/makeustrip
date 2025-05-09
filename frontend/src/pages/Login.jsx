

import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import Signup from "./Signup";
import { BACKENDURL } from "../Config/Config";
import { authContext } from "../context/authContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { auth, provider, signInWithPopup } from "../firebase"; // Import Firebase auth


import AccountDropdown from "../component/userprofile/AccountDropdown";

const Login = ({ showModal, setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [savePassword, setSavePassword] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const loginURL = `${BACKENDURL}/api/v1/auth/login`;

      const response = await fetch(loginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.error || "Invalid credentials");
        setLoading(false);
        return;
      }

      toast.success("User logged in successfully");

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: data.data,
          isAdmin: data.data.isAdmin,
          token: data.token,
        },
      });

      if (savePassword) {
        localStorage.setItem("token", data.token);
      }

      setShowModal(false);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };



  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

    const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const response = await fetch(`${BACKENDURL}/api/v1/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.error || "Something went wrong");
        return;
      }

      toast.success("Password reset link sent to your email");
    } catch (error) {
      console.error("Forgot Password error:", error);
      toast.error("Something went wrong. Try again.");
    }
  };

  const handleShowSignup = () => {
    setShowModal(false);
    setShowSignupModal(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title fs-6">Sign In / Register</h4>
            <button
              type="button"
              className="text-muted fs-4"
              onClick={() => setShowModal(false)}
            >
              <i className="fa-solid fa-square-xmark"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="modal-login-form py-4 px-md-3 px-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">User Email</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary full-width font--bold btn-lg"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>
                </div>

                <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                  <div className="modal-flex-first">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="savepassword"
                        checked={savePassword}
                        onChange={() => setSavePassword(!savePassword)}
                      />
                      <label className="form-check-label" htmlFor="savepassword">
                        Save Password
                      </label>
                    </div>
                  </div>
                  <div className="modal-flex-last">
                    <a onClick={handleForgotPassword} className="text-primary fw-medium">
                      Forget Password?
                    </a>
                  </div>
                </div>
               

                <div className="social-login py-2 px-1">
                  <ul className="row align-items-center justify-content-between g-1 p-0 m-0">
                    <li className="col">
                      
                      
                      {user ? (
        <div>
          
          <AccountDropdown/>
        </div>
      ) : (
        <div>
          {/* <button onClick={handleGoogleLogin}>Login with Google</button> */}
        </div>
      )}
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer align-items-center justify-content-center -mt-5">
            <p>
              Don't have an account yet?
              <a href="#" onClick={handleShowSignup} className="text-primary fw-medium ms-1">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </Modal>

      <Signup showSignupModal={showSignupModal} setShowSignupModal={setShowSignupModal} />
    </div>
  );
};

export default Login;





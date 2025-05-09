import React, { useState } from 'react';

const UpdateAccount = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [oldPassword, setOldPassword] = useState(''); // State for old password
  const [newPassword, setNewPassword] = useState(''); // State for new password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password

  // Handle email update submission
  const handleEmailUpdate = () => {
    alert(`Email updated to: ${email}`);
  };

  // Handle password update submission
  const handlePasswordUpdate = () => {
    if (newPassword === confirmPassword) {
      alert('Password updated successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div>
      {/* Update Email Card */}
      <div className="card mb-4">
        <div className="card-header">
          <h4>
            <i className="fa-solid fa-envelope-circle-check me-2"></i>Update Your Email
          </h4>
        </div>
        <div className="card-body">
          <div className="row align-items-center justify-content-start">
            {/* Email Input */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Update your new email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                />
              </div>
            </div>

            {/* Email Update Button */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="text-end">
                <button
                  className="btn btn-md btn-primary mb-0"
                  onClick={handleEmailUpdate} // Trigger email update
                >
                  Update Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update Password Card */}
      <div className="card">
        <div className="card-header">
          <h4>
            <i className="fa-solid fa-lock me-2"></i>Update Password
          </h4>
        </div>
        <div className="card-body">
          <div className="row align-items-center justify-content-start">
            {/* Old Password Input */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="form-group">
                <label className="form-label">Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*********"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)} // Update old password state
                />
              </div>
            </div>

            {/* New Password Input */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="form-group">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*********"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)} // Update new password state
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="*********"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
                />
              </div>
            </div>

            {/* Password Update Button */}
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="text-end">
                <button
                  className="btn btn-md btn-primary mb-0"
                  onClick={handlePasswordUpdate} // Trigger password update
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;

import React, { useState } from 'react';

const AvatarUpload = () => {
  const [imagePreview, setImagePreview] = useState('/assets/img/team-1.jpg'); // Default avatar image

  // Handle file upload and update the preview image
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Update the preview with the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="col-xl-12 col-lg-12 col-md-12 mb-4">
      <div className="d-flex align-items-center">
        {/* Avatar placeholder and preview */}
        <label
          className="position-relative me-4"
          htmlFor="uploadfile-1"
          title="Replace this pic"
        >
          <span className="avatar avatar-xl">
            <img
              id="uploadfile-1-preview"
              className="avatar-img rounded-circle border border-white border-3 shadow"
              src={imagePreview} // Display the selected image or default image
              alt="Avatar"
            />
          </span>
        </label>

        {/* Upload button */}
        <label
          className="btn btn-sm btn-light-primary px-4 fw-medium mb-0"
          htmlFor="uploadfile-1"
        >
          Change
        </label>

        {/* Hidden file input */}
        <input
          id="uploadfile-1"
          className="form-control d-none"
          type="file"
          onChange={handleFileChange} // Handle file selection
        />
      </div>
    </div>
  );
};

export default AvatarUpload;

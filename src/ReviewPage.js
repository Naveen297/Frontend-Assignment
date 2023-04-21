import React from "react";

const ReviewPage = ({ formData }) => {
  return (
    <div>
      <h2>Review your form data</h2>
      <ul>
        {Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewPage;

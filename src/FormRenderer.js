import React, { useState } from "react";
import { withTheme } from "@rjsf/core";
import { Theme as DefaultTheme } from "@rjsf/bootstrap-4";
import Ajv from "ajv";
import "./FormRenderer.css";
import ReviewPage from "./ReviewPage";

const ajv = new Ajv({ allErrors: true, verbose: true });

const Form = withTheme(DefaultTheme);

const FormRenderer = ({ schema }) => {
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOnChange = ({ formData }) => {
    setFormData(formData);
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

  // Sort the fields according to the 'sort' value
  if (schema && schema.properties) {
    schema.properties = Object.fromEntries(
      Object.entries(schema.properties).sort((a, b) => {
        const aSort = a[1].sort || Number.MAX_VALUE;
        const bSort = b[1].sort || Number.MAX_VALUE;
        return aSort - bSort;
      })
    );
  }

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="form-container">
        {!formSubmitted && (
          <Form
            schema={schema}
            formData={formData}
            onChange={handleOnChange}
            validator={ajv}
          />
        )}
        {formSubmitted && <ReviewPage formData={formData} />}
      </div>
    </div>
  );
};

export default FormRenderer;

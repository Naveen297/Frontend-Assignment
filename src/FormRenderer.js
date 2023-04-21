import React, { useState, useEffect } from "react";
import { withTheme } from "@rjsf/core";
import { Theme as DefaultTheme } from "@rjsf/bootstrap-4";
import Ajv from "ajv";
import "./FormRenderer.css";

const ajv = new Ajv({ allErrors: true, verbose: true });

const Form = withTheme(DefaultTheme);

const FormRenderer = ({ schema }) => {
  //   const [formData, setFormData] = useState({});
  const [formData, setFormData] = useState({});
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  useEffect(() => {
    setShowSubmitButton(!!Object.keys(schema).length);
  }, [schema]);
  const handleOnChange = ({ formData }) => {
    setFormData(formData);
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
        <Form
          schema={schema}
          formData={formData}
          onChange={handleOnChange}
          validator={ajv}
          noHtml5Validate={true}
          showErrorList={false}
          submitButton={showSubmitButton} // Set the visibility of the submit button
        />
      </div>
    </div>
  );
};

export default FormRenderer;

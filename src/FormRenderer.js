// // src/FormRenderer.js
// import React from "react";
// import { withTheme } from "@rjsf/core";
// import { Theme as DefaultTheme } from "@rjsf/bootstrap-4";
// import Ajv from "ajv";
// import "./FormRenderer.css";

// const ajv = new Ajv({ allErrors: true, verbose: true });

// const Form = withTheme(DefaultTheme);

// const FormRenderer = ({ schema }) => {
//   return (
//     <div style={{ height: "100vh", overflowY: "scroll" }}>
//       <div className="form-container">
//         <Form schema={schema} validator={ajv} />
//       </div>
//     </div>
//   );
// };

// export default FormRenderer;
// src/FormRenderer.js
import React, { useState } from "react";
import { withTheme } from "@rjsf/core";
import { Theme as DefaultTheme } from "@rjsf/bootstrap-4";
import Ajv from "ajv";
import "./FormRenderer.css";

const ajv = new Ajv({ allErrors: true, verbose: true });

const Form = withTheme(DefaultTheme);

const FormRenderer = ({ schema }) => {
  const [formData, setFormData] = useState({});

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

  // Implement other rules and descriptions here
  // Note that the current UI code doesn't support all the features described
  // You may need to create custom components or extend the @rjsf/bootstrap-4 theme to support them

  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="form-container">
        <Form
          schema={schema}
          formData={formData}
          onChange={handleOnChange}
          validator={ajv}
        />
      </div>
    </div>
  );
};

export default FormRenderer;

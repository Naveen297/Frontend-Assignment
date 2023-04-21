// src/FormRenderer.js
import React from "react";
import { withTheme } from "@rjsf/core";
import { Theme as DefaultTheme } from "@rjsf/bootstrap-4";
import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true, verbose: true });

const Form = withTheme(DefaultTheme);

const FormRenderer = ({ schema }) => {
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <Form schema={schema} validator={ajv} />
    </div>
  );
};

export default FormRenderer;
// import React from "react";
// import { withTheme } from "@rjsf/core";
// import { Theme as DefaultTheme } from "@rjsf/bootstrap-4";
// import Ajv from "ajv";

// const ajv = new Ajv({ allErrors: true, verbose: true });
// const Form = withTheme({
//   ...DefaultTheme,
//   styles: {
//     ...DefaultTheme.styles,
//     row: "mb-4",
//     controlLabel: "font-bold",
//     selectWidget: "border rounded p-2",
//     inputWidget: "border rounded p-2",
//   },
// });

// const FormRenderer = ({ schema }) => {
//   return (
//     <Form
//       schema={schema}
//       validate={ajv}
//       formData={{}}
//       className="my-form rounded-xl border p-4"
//       FieldTemplate={({ id, label, children, displayLabel }) => {
//         return (
//           <div className="mb-4">
//             {displayLabel && <label htmlFor={id}>{label}</label>}
//             {children}
//           </div>
//         );
//       }}
//     />
//   );
// };

// export default FormRenderer;

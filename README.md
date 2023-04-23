# JSON TO HTML FORM
JSON to Form Renderer is a React-based web application that allows users to generate forms dynamically from a given JSON schema. Users can fill in the generated form, and the entered data is then displayed on a review page.

The app is hosted on Netlify and can be accessed at https://json2form.netlify.app/

To run the app locally, you can follow these steps:

1. Clone the repository to your local machine using the following command:
   
   		`gh repo clone Naveen297/Frontend-Assignment`

Github repo link:  https://github.com/Naveen297/Frontend-Assignment.git
   
2. Install the dependencies by running the following command:

  		 `npm install`
   
3. Start the development server:

  		 `npm start`
   
4. Open your browser and navigate to http://localhost:3000 to access the app.

Once the app is running, you can generate a form by providing a JSON schema. The schema should be in a specific format, which can be copied from the examples provided in the app. Once the schema is entered, the form will be generated automatically. After filling in the form fields, you can submit the form and see the entered data on a review page.

Example Schema:
```
{
  "title": "Employee Registration",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "title": "Full Name"
    },
    "email": {
      "type": "string",
      "title": "Email",
      "format": "email"
    },
    "phone": {
      "type": "string",
      "title": "Phone",
      "pattern": "^[0-9]{10}$"
    },
    "address": {
      "type": "string",
      "title": "Address"
    },
    "department": {
      "type": "string",
      "title": "Department",
      "enum": ["Sales", "Marketing", "Engineering", "Human Resources"],
      "default": "Sales"
    },
    "skills": {
      "type": "array",
      "title": "Skills",
      "items": {
        "type": "string",
        "enum": ["JavaScript", "Python", "Java", "Ruby", "C++", "Swift", "PHP"]
      },
      "uniqueItems": true
    },
    "permissions": {
      "type": "object",
      "title": "Permissions",
      "properties": {
        "admin": {
          "type": "boolean",
          "title": "Admin",
          "default": false
        },
        "read_only": {
          "type": "boolean",
          "title": "Read Only",
          "default": false
        }
      }
    },
    "gender": {
      "type": "string",
      "title": "Gender",
      "enum": ["Male", "Female", "Other"],
      "default": "Male"
    },
    "marital_status": {
      "type": "string",
      "title": "Marital Status",
      "enum": ["Single", "Married"],
      "default": "Single"
    },
    "emergency_contact": {
      "type": "object",
      "title": "Emergency Contact",
      "properties": {
        "name": {
          "type": "string",
          "title": "Full Name"
        },
        "relationship": {
          "type": "string",
          "title": "Relationship"
        },
        "phone": {
          "type": "string",
          "title": "Phone",
          "pattern": "^[0-9]{10}$"
        }
      }
    },
    "agree_terms": {
      "type": "boolean",
      "title": "I agree to the terms and conditions"
    },
    "preferred_language": {
      "type": "string",
      "title": "Preferred Language",
      "enum": ["English", "Spanish", "French"],
      "default": "English"
    }
  },
  "required": ["name", "email", "phone", "address", "department", "agree_terms"]
}
```
##Code Explaination
### File Name: App.js
```
1. This is a React functional component named `App`.
2. It imports `useState` hook and two custom components named `JsonEditor` and `FormRenderer`.
3. It also imports `FontAwesome` icons library.
4. It initializes the state variable `schema` as an empty object using the `useState` hook.
5. It defines a function `handleJsonChange` which updates the state variable `schema` with the new value of UI Schema.
6. It renders a header, a subheader, and two columns using the CSS `grid` property.
7. The left column contains a `JsonEditor` component which allows users to input JSON data.
8. The right column contains a `FormRenderer` component which renders a form based on the schema passed as a prop.
9. The `FontAwesomeIcon` component renders a star icon from the `fas` icon set.
10. The logo image is also displayed in the top left corner of the page.
```
### File Name: FormRenderer.js
```

1. `import React, { useState } from "react";`: Import the `React` and `useState` modules from the `react` library.
2. `import { withTheme } from "@rjsf/core";`: Import the `withTheme` function from the `@rjsf/core` library. This is a higher-order component that allows us to customize the look and feel of our form.
3. `import { Theme as DefaultTheme } from "@rjsf/bootstrap-4";`: Import the default theme for the form from the `@rjsf/bootstrap-4` library.
4. `import Ajv from "ajv";`: Import the `Ajv` library, which is a JSON schema validator.
5. `import "./FormRenderer.css";`: Import a CSS file that contains styles specific to the `FormRenderer` component.
6. `const ajv = new Ajv({ allErrors: true, verbose: true });`: Create a new instance of the `Ajv` validator with options to show all validation errors and to provide verbose output.
7. `const Form = withTheme(DefaultTheme);`: Create a new component by calling `withTheme` with the default theme as an argument. This creates a new component that is wrapped with the default theme.
8. `const FormRenderer = ({ schema }) => {`: Define a new component called `FormRenderer` that takes a `schema` prop.
9. `const [formData, setFormData] = useState({});`: Create a new state variable called `formData` that holds the data entered by the user. This state variable is initialized to an empty object, and the `setFormData` function is used to update its value.
10. `const [formSubmitted, setFormSubmitted] = useState(false);`: Create a new state variable called `formSubmitted` that tracks whether the form has been submitted. This state variable is initialized to `false`, and the `setFormSubmitted` function is used to update its value.
11. `const handleOnChange = ({ formData }) => { setFormData(formData); };`: Define a new function called `handleOnChange` that takes a single argument, `formData`, and updates the `formData` state variable with its value.
12. `const handleSubmit = () => { setFormSubmitted(true); };`: Define a new function called `handleSubmit` that sets the `formSubmitted` state variable to `true`.
13. `if (schema && schema.properties) {...}`: Check if the `schema` prop exists and contains a `properties` object. If it does, sort the properties object by the `sort` value of each property.
14. The `return` statement renders the form using the `Form` component wrapped with the default theme. If `formSubmitted` is `true`, it renders a review page that displays the data entered by the user.
Overall, this code creates a form that can be customized with a JSON schema and handles user input. It also includes a review page that displays the data entered by the user after the form has been submitted.
```
### File Name: jsonEditor.js
```
1. This code defines a functional component called `JsonEditor`. This component renders an Ace Editor, which is a code editor for the web.
2. The `JsonEditor` component accepts a single prop called `onChange`, which is a function to be called when the JSON code in the editor is changed.
3. The `handleChange` function is a callback function that is called whenever the contents of the Ace Editor changes. It attempts to parse the contents of the editor as JSON and calls the `onChange` prop with the parsed JSON object as an argument. If there is an error parsing the JSON, the function simply does nothing.

Finally, the component returns the Ace Editor component with specific settings. The editor has the JSON syntax highlighting and Monokai theme applied. The `handleChange` function is passed as the onChange prop to the Ace Editor, and the editor is set to take up the full width and height of its container. The option `setOptions={{ useWorker: false }}` disables the use of the Ace Editor worker, which can cause performance issues in some cases.
```
The app uses the following technologies:

1. React
2. @rjsf/core (React JSON Schema Form)
3. @rjsf/bootstrap-4 (React JSON Schema Form Bootstrap 4 theme)
4. Ajv (JSON schema validator)
5. Netlify (for hosting the app)

In summary, JSON to Form Renderer is a simple yet powerful tool that can help you generate forms quickly and easily from a given JSON schema.

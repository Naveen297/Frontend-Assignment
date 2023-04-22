JSON to Form Renderer

This project is a simple React-based web application that allows users to generate forms dynamically from a given JSON schema. Users can fill in the generated form, and the entered data is then displayed on a review page.

The app is hosted on Netlify and can be accessed at https://json2form.netlify.app/.

Running the App Locally

To run the app locally, follow these steps:

Clone the repository to your local machine:

gh repo clone Naveen297/Frontend-Assignment

Install the dependencies:

npm install

Start the development server:

npm start

Open your browser and navigate to http://localhost:3000 to access the app.
Usage

Once the app is running, you can generate a form by providing a JSON schema. The schema should be in the following format:

you can copy the json object from pizza.json and employee.json to run the code.
///
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
///
To generate a form, enter the schema in the input box on the home page and form will be automaticaly be generated.

Once the form is rendered, you can fill in the fields and click the "Submit" button. The entered data will be displayed on a review page.

Technologies Used

1. React
2. @rjsf/core (React JSON Schema Form)
3. @rjsf/bootstrap-4 (React JSON Schema Form Bootstrap 4 theme)
4. Ajv (JSON schema validator)
5. Netlify (for hosting the app)


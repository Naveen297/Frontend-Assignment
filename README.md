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

The app uses the following technologies:

1. React
2. @rjsf/core (React JSON Schema Form)
3. @rjsf/bootstrap-4 (React JSON Schema Form Bootstrap 4 theme)
4. Ajv (JSON schema validator)
5. Netlify (for hosting the app)

In summary, JSON to Form Renderer is a simple yet powerful tool that can help you generate forms quickly and easily from a given JSON schema.

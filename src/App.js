// // src/App.js
// import React, { useState } from "react";
// import JsonEditor from "./JsonEditor";
// import FormRenderer from "./FormRenderer";
// import "./App.css";

// function App() {
//   const [schema, setSchema] = useState({});

//   const handleJsonChange = (newSchema) => {
//     setSchema(newSchema);
//   };

//   return (
//     <div className="App">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold my-5 flex justify-center items-center">
//           Dynamic UI Form Generator
//         </h1>
//         <h2 className="text-2xl font-semibold my-5 flex justify-center items-center">
//           Instantly Render Forms from UI Schema
//         </h2>
//         {/* : Instantly Render Forms from UI Schema */}
//         <div className="grid grid-cols-2 gap-5">
//           <div className="border p-5">
//             <h2 className="text-xl font-semibold mb-5 flex justify-center items-center">
//               UI Schema
//             </h2>
//             <JsonEditor onChange={handleJsonChange} />
//           </div>
//           <div className="border p-5">
//             <h2 className="text-xl font-semibold mb-5 flex justify-center items-center">
//               Rendered Form
//             </h2>
//             <FormRenderer schema={schema} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import JsonEditor from "./JsonEditor";
import FormRenderer from "./FormRenderer";
import "./App.css";
// import logo from "./logo.png"; // Import the logo/
// Add these imports to the top of your file
import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add this line to register the icon sets
library.add(fas);

function App() {
  const [schema, setSchema] = useState({});

  const handleJsonChange = (newSchema) => {
    setSchema(newSchema);
  };

  return (
    <div className="App">
      <div className="container mx-auto">
        {/* Add this div for the logo */}
        <div className="absolute top-0 left-0 m-5">
          <img
            src="https://i.postimg.cc/KjsFjcyv/Screenshot-2023-04-21-at-10-16-51-PM-removebg-preview.png"
            alt="Logo"
            style={{ width: "200px" }}
          />
        </div>
        {/* End logo */}
        <h1 className="text-4xl font-bold my-5 flex justify-center items-center gradient-text">
          <FontAwesomeIcon icon={["fas", "star"]} className="mr-2" />
          Dynamic UI Form Generator
        </h1>
        <h2 className="text-2xl font-semibold my-5 flex justify-center items-center gradient-text">
          Instantly Render Forms from UI Schema
        </h2>

        <div className="grid grid-cols-2 gap-5">
          <div className="border p-5">
            <h2 className="text-xl font-semibold mb-5 flex justify-center items-center">
              UI Schema
            </h2>
            <JsonEditor onChange={handleJsonChange} />
          </div>
          <div className="border p-5">
            <h2 className="text-xl font-semibold mb-5 flex justify-center items-center">
              Rendered Form
            </h2>
            <FormRenderer schema={schema} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

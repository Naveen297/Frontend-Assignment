// src/App.js
import React, { useState } from "react";
import JsonEditor from "./JsonEditor";
import FormRenderer from "./FormRenderer";
import "./App.css";

function App() {
  const [schema, setSchema] = useState({});

  const handleJsonChange = (newSchema) => {
    setSchema(newSchema);
  };

  return (
    <div className="App">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-5 flex justify-center items-center">
          Dynamic UI Form Generator
        </h1>
        <h2 className="text-2xl font-semibold my-5 flex justify-center items-center">
          Instantly Render Forms from UI Schema
        </h2>
        {/* : Instantly Render Forms from UI Schema */}
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
// import React, { useState } from "react";
// import JsonEditor from "./JsonEditor";
// import FormRenderer from "./FormRenderer";
// import "./App.css";

// function App() {
//   const [schema, setSchema] = useState({});

//   const handleJsonChange = (content) => {
//     if (content.jsObject) {
//       setSchema(content.jsObject);
//     }
//   };

//   return (
//     <div className="App">
//       <div className="container mx-auto">
//         <h1 className="text-4xl font-bold my-5 text-center">
//           UI Schema Form Renderer
//         </h1>
//         <div className="grid grid-cols-2 gap-5">
//           <div className="border p-5">
//             <h2 className="text-2xl font-semibold mb-5">UI Schema</h2>
//             <JsonEditor onChange={handleJsonChange} />
//           </div>
//           <div className="border p-5">
//             <h2 className="text-2xl font-semibold mb-5">Rendered Form</h2>
//             <FormRenderer schema={schema} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

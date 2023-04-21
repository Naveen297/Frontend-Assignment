// src/JsonEditor.js
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";

const JsonEditor = ({ onChange }) => {
  const handleChange = (newValue) => {
    try {
      const parsedJson = JSON.parse(newValue);
      onChange(parsedJson);
    } catch (error) {}
  };

  return (
    <AceEditor
      mode="json"
      theme="monokai"
      onChange={handleChange}
      name="jsonEditor"
      width="100%"
      height="100vh"
      setOptions={{ useWorker: false }}
    />
  );
};

export default JsonEditor;

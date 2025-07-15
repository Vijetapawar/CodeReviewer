import React from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";

const CodeEditor = ({ code, setCode }) => {
  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={(code) =>
        Prism.highlight(code, Prism.languages.javascript, "javascript")
      }
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
        border: "1px solid #ddd",
        borderRadius: "5px",
        height: "100%",
        width: "100%",
      }}
    />
  );
};

export default CodeEditor;

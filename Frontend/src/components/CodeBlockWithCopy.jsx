import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CodeBlockWithCopy = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5 sec
  };

  return (
    <div style={{ position: "relative", marginBottom: "1rem" }}>
      <CopyToClipboard text={code} onCopy={handleCopy}>
        <button
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            fontSize: "0.8rem",
            padding: "4px 8px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            backgroundColor: copied ? "#4caf50" : "#007bff",
            color: "#fff",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>

      <pre
        style={{
          backgroundColor: "#1e1e1e",
          color: "#fff",
          padding: "1rem",
          borderRadius: "6px",
          overflowX: "auto",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlockWithCopy;

import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import ReviewButton from "./components/ReviewButton";
import CodeReview from "./components/CodeReview";
import axios from "axios";

import "./App.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const App = () => {
  const [code, setCode] = useState(`function sum() {
    return 1 + 1;
  }`);
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const reviewCode = async () => {
    setIsLoading(true);
    setError(null);
    setReview("");
    try {
      const res = await axios.post(`${API_URL}/ai/get-review`, { code });
      setReview(res.data.review || "⚠️ No review returned.");
    } catch (err) {
      console.error("Failed to fetch review:", err);
      setError("❌ Failed to get review. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="flex w-screen h-screen bg-gray-900 gap-1">
        <div className="w-1/2 relative p-4 overflow-auto basis-[50%] flex flex-col">
          <CodeEditor
            className="w-full m-0 rounded-md flex-1"
            code={code}
            setCode={setCode}
          />
          <ReviewButton onClick={reviewCode} isLoading={isLoading} />
        </div>
        <div className="w-1/2 basis-[50%] min-h-screen p-4 bg-gray-900 overflow-auto ">
          <CodeReview review={review} isLoading={isLoading} error={error} />
        </div>
      </main>
    </>
  );
};

export default App;

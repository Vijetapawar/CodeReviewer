import React from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import ErrorBoundary from "./ErrorBoundary";

const CodeReview = ({ review, isLoading, error }) => {
  return (
    <div className="right p-4  text-white rounded-md bg-gray-950 px-8 text-base overflow-auto">
      <ErrorBoundary>
        {isLoading && <p>Loading review...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!isLoading && !error && (
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {review || "*No review available.*"}
          </Markdown>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default CodeReview;

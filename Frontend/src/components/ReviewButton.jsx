import React from "react";

const ReviewButton = ({ onClick, isLoading }) => {
  return (
    <div
      onClick={onClick}
      className="review text-center cursor-pointer hover:bg-blue-700 transition absolute bottom-4 right-4 bg-blue-600 text-white px-10 py-4 font-sm border-none rounded-md select-none"
      disabled={isLoading}
    >
      {isLoading ? "Reviewing..." : "Review"}
    </div>
  );
};

export default ReviewButton;

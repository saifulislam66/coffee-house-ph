import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <AiOutlineWarning className="w-24 h-24 text-red-500 mb-6" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;

import { Link } from "react-router-dom";
import { useTitle } from "../Hooks/useTitle";
import React from "react";

export const ErrorMessage = () => {
  useTitle("404 Page Not Found | Bay-Ler View Hotel");
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <Link to="/"
          className="inline-block py-3 px-6 bg-red-600 hover:bg-red-500 text-white rounded-lg font-semibold"
        >
          Return to Bay-Ler View Hotel Website
        </Link>
      </div>
    </div>
  );
};

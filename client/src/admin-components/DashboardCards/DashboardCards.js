import React from "react";

export const DashboardCards = () => {
  return (
    <>
      <div className="pt-10 mx-10">
        <h1 className="text-xl text-gray-800">Welcome to Bay-Ler View Dashboard</h1>
        <h3 className="text-sm text-gray-600">Quick overview of all the records inside our database.</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-10 mx-10">
        <div className="shadow-lg p-5 bg-yellow-100">
          <h2 className="text-lg font-semibold mb-4 text-gray-600">Reservations</h2>
          <p className="text-sm text-gray-700">Total Records: 1</p>
        </div>

        <div className="shadow-lg p-5 bg-green-100">
          <h2 className="text-lg font-semibold mb-4">Testimonials</h2>
          <p className="text-sm text-gray-700">Total Records: 1</p>
        </div>

        <div className="shadow-lg p-5 bg-blue-100">
          <h2 className="text-lg font-semibold mb-4">Newsletters</h2>
          <p className="text-sm text-gray-700">Total Records: 1</p>
        </div>

        <div className="shadow-lg p-5 bg-red-100">
          <h2 className="text-lg font-semibold mb-4">Inbox</h2>
          <p className="text-sm text-gray-700">Total Records: 1</p>
        </div>
      </div>
    </>
  );
};

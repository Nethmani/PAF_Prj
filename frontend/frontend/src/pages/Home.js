import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to the Home Page
        </h2>
        <p className="mb-4 text-gray-600">Choose an action below:</p>

        <div className="space-y-4">
          <Link
            to="/add-user"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded transition"
          >
            ➕ Create User
          </Link>

          <Link
            to="/user-list"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
          >
            📋 View Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

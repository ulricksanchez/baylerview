import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const Navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get("https://baylerview-api.onrender.com/api/logins")
      .then((response) => {
        const data = response.data.data;
        const matchedUser = data.find(
          (user) => user.username === username && user.password === password
        );

        if (matchedUser) {
          if (matchedUser.account_status === "Inactive") {
            // Account is inactive, show an alert
            alert("Your account is inactive. Please contact support.");
            return;
          }

          if (matchedUser.account_status === "Deleted") {
            setInvalidCredentials(true);
            return;
          }
          
          setInvalidCredentials(false);
          localStorage.setItem("local_id", matchedUser._id);
          // localStorage.setItem("username", matchedUser.username);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            Navigate("/admin/dashboard");
          }, 3000);
        } else {
          setInvalidCredentials(true);
        }
      })
      .catch((error) => {
        console.error("Something was wrong in the database:", error);
      });
  };

  return (
    <div className="bg-red-100 py-10">
      <div className="max-w-md mx-auto py-40">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {invalidCredentials && (
            <p className="text-red-500 text-sm mb-4">
              Invalid username or password
            </p>
          )}

          <div className="flex items-center justify-between">
            <button
              className="py-2 px-4 text-sm bg-red-600 hover:bg-red-500 rounded text-white"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-300">
            <div className="bg-white w-1/3 py-4 px-8 rounded shadow-md text-center">
              <p className="text-green-500 text-lg font-semibold mb-4">
                Congratulations! Login Successfully!
              </p>
              <p>You will be redirected to the dashboard shortly...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

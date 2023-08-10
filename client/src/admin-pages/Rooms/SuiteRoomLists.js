import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo/icon.png";
import { SidebarNav } from "../../admin-components/Navigation/SidebarNav";
import { Link } from "react-router-dom";
import { SuiteRoomList } from "../../admin-components/Rooms/SuiteRoomList";

export const SuiteRoomLists = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); //This will be the declarations for toggle of sidebar.
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 720); // Adjust the breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state based on window width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const storedId = localStorage.getItem("local_id"); //Get the session id from the session storage
  const navigate = useNavigate(); //Navigate to a specific path

  useEffect(() => {
    axios
      .get("https://baylerview-api.onrender.com/api/logins")
      .then((response) => {
        const data = response.data.data;
        const matchedData = data.filter((item) => item._id === storedId);
        if (matchedData.length === 0) {
          navigate("/admin");
        } else {
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [navigate, storedId]);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div
          className={`${
            sidebarOpen ? "flex" : "hidden"
          } flex flex-col w-64 bg-gray-800`}
        >
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <img src={Logo} alt="featured_rooms" className="admin-logo" />
            <span className="text-white font-bold uppercase">
              Bay-Ler View Admin
            </span>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <SidebarNav />
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 border-b border-gray-200">
            <div className="flex items-center px-4">
              <button
                className="text-gray-500 focus:outline-none focus:text-gray-700"
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h1 className="text-gray-500 mx-5 pt-10 text-xl font-semibold">
              Rooms Manager&nbsp;|&nbsp;
              <span className="text-red-600">Suite</span>
            </h1>
            <h3 className="text-gray-500 mx-5 text-sm pb-10">
              You can manage newsletter records here.
            </h3>
          </div>
          <div className="overflow-y-auto mx-5">
            <SuiteRoomList />
          </div>

          <div className="mx-5 py-10">
            <h3 className="mx-5 text-gray-500 text-sm">
              Room Manager Control
            </h3>
            <Link to="#">
              <button className="m-3 py-3 px-8 text-sm bg-red-600 hover:bg-red-500 rounded text-white hover:text-black">
                Recycle Bin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

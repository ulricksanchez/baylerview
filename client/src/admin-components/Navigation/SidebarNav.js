import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SidebarNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("local_id");
  };

  return (
    <>
      <nav className="flex-1 px-2 py-4 bg-gray-800">
        <div className="mb-6 px-6 py-4">
          <Link to="/admin/dashboard">
            <span className="inline-block text-white hover:text-red-500 my-2 w-full">
              <span className="material-icons-outlined float-left pr-2">
                dashboard
              </span>
              Dashboard
            </span>
          </Link>

          <Link to="#">
            <span className="inline-block text-white hover:text-red-500 my-2 w-full">
              <span className="material-icons-outlined float-left pr-2">
                book
              </span>
              Reservations
            </span>
          </Link>

          <span className="text-gray-500 text-sm">Manage</span>

          <Link to="#">
            <span
              className="inline-block text-white hover:text-red-500 my-2 w-full"
              onClick={toggleDropdown}
            >
              <span className="material-icons-outlined float-left pr-2">
                bed
              </span>
              Rooms
              <span className="material-icons-outlined float-right">
                {isDropdownOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
            </span>
          </Link>
          
          {isDropdownOpen && (
            <div className="pl-8">
              <Link to="/admin/rooms/featured">
                <span className="inline-block text-white hover:text-red-500 my-2 w-full">
                  Featured
                </span>
              </Link>
              <Link to="/admin/rooms/standard">
                <span className="inline-block text-white hover:text-red-500 my-2 w-full">
                  Standard
                </span>
              </Link>

              <Link to="/admin/rooms/deluxe">
                <span className="inline-block text-white hover:text-red-500 my-2 w-full">
                  Deluxe
                </span>
              </Link>

              <Link to="/admin/rooms/suite">
                <span className="inline-block text-white hover:text-red-500 my-2 w-full">
                  Suite
                </span>
              </Link>
            </div>
          )}
          <Link to="/admin/messages">
            <span className="inline-block text-white hover:text-red-500 my-2 w-full">
              <span className="material-icons-outlined float-left pr-2">
                chat
              </span>
              Messages
            </span>
          </Link>
          <Link to="/admin/testimonials">
            <span className="inline-block text-white hover:text-red-500 my-2 w-full">
              <span className="material-icons-outlined float-left pr-2">
                record_voice_over
              </span>
              Testimonials
            </span>
          </Link>

          <Link to="/admin/newsletters">
            <span className="inline-block text-white hover:text-red-500 my-2 w-full">
              <span className="material-icons-outlined float-left pr-2">
                email
              </span>
              Newsletters
            </span>
          </Link>
          <span className="text-gray-500 text-sm">Main menu</span>
          <Link to="/admin/accounts">
            <span className="inline-block text-white hover:text-red-500 my-2 w-full">
              <span className="material-icons-outlined float-left pr-2">
                face
              </span>
              Accounts Manager
            </span>
          </Link>

          <Link to="/admin">
            <span
              onClick={handleLogout}
              className="inline-block text-white hover:text-red-500 my-2 w-full hover:cursor-pointer"
            >
              <span className="material-icons-outlined float-left pr-2">
                power_settings_new
              </span>
              Log out
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
};

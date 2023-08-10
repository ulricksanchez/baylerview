import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      id="ftr"
      className="bg-yellow-100 bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12 footer-banner"
    >
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      
      <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 text-center ">
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">Solutions</label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">Site Map</label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>Recipes & Menus</li>
            <li>Ingredients</li>
            <li>Nutrients</li>
            <li>Meals</li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">
            Helpful Links
          </label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>
              <Link to="/location" className="text-gray-500 hover:text-red-600">
                Get Here
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-500 hover:text-red-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/newsletter"
                className="text-gray-500 hover:text-red-600"
              >
                Newsletter
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-500 hover:text-red-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <label className="text-gray-600 font-bold uppercase">
            Development Team
          </label>
          <ul className="flex flex-col gap-6 text-gray-500">
            <li>
              <Link
                to="/teamdevelopment"
                className="text-gray-500 hover:text-red-600"
              >
                Our Dev Team
              </Link>
            </li>
            <li>Bon Appetit</li>
            <li>Gourmet</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="mx-auto">
          <span className="font-bold">Bay-Ler View Hotel</span>
          <p className="text-gray-500">
            &copy; 2023 - Murk Technology Solutions. Philippines. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navigation/NavigationBar.css";
import Logo from "../../assets/Logo/logo-main.png";

import React from "react";

export const NavigationBar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [changeHeader, setChangeHeader] = useState(false);

  // header change function
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  //change header by scrolling.
  window.addEventListener("scroll", onChangeHeader);

  return (
    <header
      className={
        changeHeader
          ? "nav-header bg-yellow-100 shadow-lg transition duration-500"
          : "nav-header bg-yellow-100 transition duration-500"
      }
    >
      <div className="mx-auto">
        <Link to="/">
          <img className="w-36 cursor-pointer mr-img" src={Logo} alt="bvhlg" />
        </Link>
        <nav className="navigation bg-yellow-100" ref={navRef}>
          <Link to="/">Home</Link>
          {/* <Link to="/about">About Us</Link> */}
          <Link to="/rooms">Rooms</Link>
          <Link to="/experiences">Experiences</Link>
          <Link to="/check-reservation">
            <button
              type="button"
              className="bg-red-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-red-500 transition duration-200"
            >
              Book Now
            </button>
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

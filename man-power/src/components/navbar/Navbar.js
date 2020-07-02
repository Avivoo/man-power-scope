import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployerNavbarLinks from "./EmployerNavbarLinks"
import EmployeeNavbarLinks from "./EmployeeNavbarLinks"
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuState] = useState(false);

  let statedotisEmployer = true;

  const links = statedotisEmployer ? <EmployerNavbarLinks /> : <EmployeeNavbarLinks />;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 p-lg-0  mt-lg-0 justify-content-sm-start fixed-top">
        <Link to="/" className="navbar-brand order-0 order-lg-0 mr-2 mr-auto">
          ManpowerApp
        </Link>
        <button
          className="navbar-toggler align-self-start"
          type="button"
          onClick={() => setMenuState(!menuActive)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse d-flex flex-column flex-lg-row flex-xl-row justify-content-lg-end bg-dark p-3 p-lg-0 mt-5 mt-lg-0 mobileMenu onRight ${
            menuActive ? "open" : ""
          }`}
          id="navbarSupportedContent"
        >
          {links}
        </div>
      </nav>
      <div
        className={`overlay ${menuActive ? "open" : ""}`}
        onClick={() => setMenuState(!menuActive)}
      ></div>
    </>
  );
}

export default Navbar;

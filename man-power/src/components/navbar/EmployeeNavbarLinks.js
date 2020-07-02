import React from "react";
import { Link } from "react-router-dom";
function EmployeeNavbarLinks() {
  return (
    <ul className="navbar-nav align-self-stretch">
      <li className="nav-item active">
        <Link to="/" className="nav-link">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="ProfilePage" className="nav-link">
          ProfilePage
        </Link>
      </li>
      <li className="nav-item">
        <Link to="workFeed" className="nav-link">
          workFeed
        </Link>
      </li>
    </ul>
  );
}

export default EmployeeNavbarLinks;

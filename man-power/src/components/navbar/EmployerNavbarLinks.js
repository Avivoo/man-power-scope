import React from 'react'
import { Link } from "react-router-dom";
function EmployerNavbarLinks() {
    return (
         <ul className="navbar-nav align-self-stretch">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="ControlPanel" className="nav-link">
                  Control Panel
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Post" className="nav-link">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="CreateNewPost" className="nav-link">
                  Add new post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="PostsHistory" className="nav-link">
                  Posts History
                </Link>
              </li>
              <li className="nav-item">
                <Link to="workFeed" className="nav-link">
                  workFeed
                </Link>
              </li>
            </ul>
    )
}

export default EmployerNavbarLinks

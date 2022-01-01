import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar  navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                Ahmad Hussain
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse m-lg-auto"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-lg-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      style={(isActive) => ({
                        color: isActive ? "green" : "blue",
                      })}
                      className="nav-link active "
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={(isActive) => ({
                        color: isActive ? "green" : "blue",
                      })}
                      className="nav-link active"
                      aria-current="page"
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      style={(isActive) => ({
                        color: isActive ? "green" : "blue",
                      })}
                      className="nav-link active"
                      aria-current="page"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      style={(isActive) => ({
                        color: isActive ? "green" : "blue",
                      })}
                      className="nav-link active"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item"></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

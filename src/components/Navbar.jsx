import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-primary navbar-dark fixed-top">
      <div className="container-fluid ">
        <p className="navbar-brand">Library Management System </p>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <p className="nav-link">Login</p>
            </li>
            <li className="nav-item">
              <p className="nav-link">Signup</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

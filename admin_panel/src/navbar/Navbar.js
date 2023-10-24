import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-xl">
        <div className="container h-100">
          <Link to="/" className="navbar-brand">
            <h1 className="tm-site-title mb-0">Product Admin</h1>
          </Link>
          <button
            className="navbar-toggler ml-auto mr-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars tm-nav-icon"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto h-100">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="fas fa-tachometer-alt"></i>
                  Dashboard
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">
                  <i className="fas fa-shopping-cart"></i>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/accounts" className="nav-link">
                  <i className="far fa-user"></i>
                  Accounts
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link d-block" href="login.html">
                  Admin, <b>Logout</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

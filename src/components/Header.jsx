import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  function isAction(path) {
    return location.pathname === path;
  }

  return (
    <header>
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Furni<span>.</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className={`nav-item ${isAction("/") && "active"}`}>
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className={`nav-item ${isAction("/shop") && "active"}`}>
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
              <li className={`nav-item ${isAction("/about") && "active"}`}>
                <a className="nav-link" href="/about">
                  About us
                </a>
              </li>
              <li className={`nav-item ${isAction("/services") && "active"}`}>
                <a className="nav-link" href="/services">
                  Services
                </a>
              </li>
              <li className={`nav-item ${isAction("/blog") && "active"}`}>
                <a className="nav-link" href="/blog">
                  Blog
                </a>
              </li>
              <li className={`nav-item ${isAction("/contact") && "active"}`}>
                <a className="nav-link" href="/contact">
                  Contact us
                </a>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="images/user.svg" />
                </a>
              </li>
              <li>
                <a className="nav-link" href="cart.html">
                  <img src="images/cart.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

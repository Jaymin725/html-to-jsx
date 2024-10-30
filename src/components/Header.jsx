import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart);
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${isAction("/shop") && "active"}`}>
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className={`nav-item ${isAction("/about") && "active"}`}>
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li className={`nav-item ${isAction("/services") && "active"}`}>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className={`nav-item ${isAction("/blog") && "active"}`}>
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className={`nav-item ${isAction("/contact") && "active"}`}>
                <Link className="nav-link" to="/contact">
                  Contact us
                </Link>
              </li>
            </ul>

            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <a className="nav-link" href="#">
                  <img src="images/user.svg" />
                </a>
              </li>
              <li>
                <Link className="nav-link position-relative" to="/cart">
                  <img src="images/cart.svg" />
                  {cart.items.length !== 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                      {cart.items.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {ktLogo} from './images/index'


function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img
            src={ktLogo}
            alt="KT artistry"
          />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Services" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/checkout">
          <FontAwesomeIcon icon={faShoppingCart} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

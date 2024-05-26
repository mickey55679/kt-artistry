import React from "react";
import { NavLink, Link } from "react-router-dom"; // Importing NavLink and Link for routing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon for icon display
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; // Importing shopping cart icon
import { ktLogo } from "./images/index"; // Importing KT logo

// Navbar component receives 'cartCount' prop to display the count of items in the cart
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          {/* KT Artistry logo */}
          <img src={ktLogo} alt="KT artistry" />
        </a>
      </div>
      {/* Navigation links */}
      <ul className="nav-links">
        <li>
          {/* Home link */}
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          {/* About link */}
          <NavLink to="/About" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          {/* Services link */}
          <NavLink to="/Services" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          {/* Contact link */}
          <NavLink to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      {/* Cart icon and count */}
      <div className="navbar-cart">
        {/* Link to the checkout page */}
        <Link to="/checkout">
          {/* Shopping cart icon */}
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ color: "palevioletred" }} // Styling for the icon color
          />
          {/* Display cart count if it's greater than 0 */}
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

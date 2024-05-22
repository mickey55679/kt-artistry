import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img
            src="https://scontent.ffsd2-1.fna.fbcdn.net/v/t39.30808-6/295984747_191912463177368_7972863195733534214_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j_MXjqCyv8AQ7kNvgGmN-rp&_nc_ht=scontent.ffsd2-1.fna&oh=00_AYBQDh5WMlsERUgN17hz0UXTpJ3Soi0L_LQ0iRSSfmVl2Q&oe=664F2BB7"
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
    </nav>
  );
}
export default Navbar;

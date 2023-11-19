import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import logo from './qlogo.png'; // Adjust the path to where your image is located

class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav>
        <img src={logo} alt="Logo" className="navbar-logo" />

        <div className="NavbarItems">
          <ul className={`nav-menu`}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={"nav-links"} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

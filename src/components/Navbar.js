import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';

const Navbar = () => (
  <nav className="nav-bar">
    <Link to="/" className="header">
      <img className="logo-img" alt="logo" src={logo} />
      <span className="logo-name">Space Traveler&lsquo;s Hub</span>
    </Link>
    <ul className="header-category">
      <li className="list">
        <NavLink to="/" exact activeClassName="active">
          Rockets
        </NavLink>
      </li>
      <li className="mission">
        <NavLink to="/MISSION" exact activeClassName="active">
          Mission
        </NavLink>
      </li>
      <span className="line">|</span>
      <li className="profile">
        <NavLink to="/profile" exact activeClassName="active">
          My profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export { Navbar as default };

import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../assets/images/planet.png';
import '../styles/rocket.css';

const Navbar = () => {
  const handleActive = (nav) => (nav.isActive ? '' : 'active-link');
  const result = (
    <header className="navbar">
      <div className="logoInfo">
        <img src={planetImg} alt="" />
        <h1 className="navHeader">Space Travellers&apos; Hub</h1>
      </div>
      <div className="links">
        <NavLink to="/" exact activeClassName="active">
          Rockets
        </NavLink>
        <NavLink className={(nav) => handleActive(nav)} to="/react-capstone/missions">
          Missions
        </NavLink>
        <span className="line">|</span>
        <NavLink id="border" className={(nav) => handleActive(nav)} to="/react-capstone/myprofile">
          My Profile
        </NavLink>
      </div>
    </header>
  );

  return result;
};

export default Navbar;

import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
      <ul className="nav nav-tabs">
        <NavLink exact to="/campuses" activeClassName="active" className="nav-link">Campuses</NavLink>
        <NavLink exact to="/students" activeClassName="active" className="nav-link">Students</NavLink>
      </ul>
  )
}

export default Navbar;

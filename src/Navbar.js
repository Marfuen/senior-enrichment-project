import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
  }
}

class Navbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-fluid navbar-expand-lg navbar-dark primary-color sticky-top bg-white" style={{marginBottom: '20px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}>
        <a className="navbar-brand" href="/#/campuses" style={{color: 'black'}}>Univ</a>
        <ul className="nav nav-pills">
          <NavLink exact to="/campuses" activeClassName="active" className="nav-link">Campuses</NavLink>
          <NavLink exact to="/students" activeClassName="active" className="nav-link">Students</NavLink>
        </ul>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Navbar);

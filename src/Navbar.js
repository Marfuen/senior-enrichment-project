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
      <ul className="nav nav-tabs" style={{marginBottom: '20px'}}>
        <NavLink exact to="/campuses" activeClassName="active" className="nav-link">Campuses</NavLink>
        <NavLink exact to="/students" activeClassName="active" className="nav-link">Students</NavLink>
        <NavLink exact to="/add/campus" activeClassName="active" className="nav-link">Add Campus</NavLink>
      </ul>
    );
  }
}

export default connect(mapStateToProps)(Navbar);

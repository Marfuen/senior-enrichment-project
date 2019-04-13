import React, { Component } from 'react';
import {fetchStudents} from './store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Students extends Component {
  componentDidMount(){
    this.props.getStudents();
  }
  render(){
    return(
      <ul>
        {this.props.students.map(student =>
          <li key={student.id}><Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link></li>
        )}
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents()),
  }
}

const mapStateToProps = ({students}) => {
  return {
    students
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);

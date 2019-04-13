import React, { Component } from 'react';
import {fetchStudents} from './store';
import { connect } from 'react-redux';

class Students extends Component {
  componentDidMount(){
    this.props.getStudents();
  }
  render(){
    console.log(this.props.students);
    return(
      <ul>
        {this.props.students.map(student =>
          <li key={student.id}>{student.firstName} {student.lastName}</li>
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

const mapStateToProps = (state) => {
  return {
    students: state.students,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);

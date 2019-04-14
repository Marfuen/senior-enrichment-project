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
      <div>
        <div className="card">
          <ul className="card-body">
          <h2>Student List: </h2>
          {this.props.students.map(student =>
            <div key={student.id}><Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link></div>
          )}
        </ul>
        </div>
        <Link to="/add/student"><button type="submit" className="btn btn-success" style={{marginTop: '20px'}}>Add Student</button></Link>
      </div>
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

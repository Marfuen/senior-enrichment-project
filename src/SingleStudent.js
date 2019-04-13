import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

const SingleStudent = ({student, campus}) => {
  return(
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={student.imageUrl} className="card-img"/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4>Currently Attending: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h4>
            <p>First Name: {student.firstName}</p>
            <p>Last Name: {student.lastName}</p>
            <p>email: {student.email}</p>
            <p>GPA: {student.gpa}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({students, campuses}, props) => {
  const student = students.find(student => student.id === Number(props.match.params.id));
  const campus = campuses.find(campus => student.campusId === campus.id);
  return {student, campus}
};

export default withRouter(connect(mapStateToProps)(SingleStudent))

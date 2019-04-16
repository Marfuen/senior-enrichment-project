import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = ({campuses, students}, props) => {
  const student = students.find(stud => stud.id === Number(props.match.params.id));
  const campus = campuses.find(camp => student.campusId === camp.id);
  return {student, campus}
};

class SingleStudent extends Component {
  render(){
    const {student, campus} = this.props;
    if(!student){
      return <div/>
    } else {
      return(
        <div>
          {(student) ?
          <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={student.imageUrl} className="card-img"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {campus ?
                  <h4>Currently Attending: <Link to={`/campuses/${campus.id}`}>{campus.name}</Link></h4>
                : <h4>Not attending a school!</h4>
                }
                <p>First Name: {student.firstName}</p>
                <p>Last Name: {student.lastName}</p>
                <p>email: {student.email}</p>
                <p>GPA: {student.gpa}</p>
                <button type="submit" className="btn btn-sm btn-warning"><Link to={`/edit/student/${student.id}`}>Edit</Link></button>
              </div>
            </div>
          </div>
        </div>
        : <h2>Could not find student :/</h2>}
        </div>
      )
    }
  }
}

export default connect(mapStateToProps)(SingleStudent);

import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = ({campuses, students}, props) => {
  const campus = campuses.find(campus => campus.id === Number(props.match.params.id));
  students = students.filter(student => student.campusId === campus.id);
  return {campus, students}
}

class SingleCampus extends Component {
  render(){
    const {campus, students} = this.props;
    return(
      <div>
        {campus ? <div>
        <div className="card" style={{marginBottom: '20px'}}>
          <img src={campus.imageUrl} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{campus.name}</h5>
            <p>{campus.address}</p>
          </div>
        </div>
          {students.length > 0 ?
            <div>
              <h4>Students: </h4>
              <ul>
                {students.map(student =>
                  <li key={student.id}><Link to={`/students/${student.id}`}>{student.firstName} {student.lastName}</Link></li>
                )}
              </ul>
            </div>
          : <h3>No students go to this school!</h3>
          }</div> : <div/>}
      </div>
    )
  }
}



export default connect(mapStateToProps)(SingleCampus);

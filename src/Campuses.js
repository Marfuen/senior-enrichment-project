import React, {Component} from 'react';
import {removeCampus} from "./store";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
  return {
    removeCampus: (id) => dispatch(removeCampus(id)),
  }
}

const mapStateToProps = ({campuses, students}) => {
  const studentsCount = (campus, students) => {
    let studs = students.filter(student => student.campusId === campus.id)
    return studs.length;
  }
  return {
    campuses,
    students,
    studentsCount,
  }
}


class Campuses extends Component {
  render(){
    return(
      <div>
        <Link to="/add/campus"><button type="submit" className="btn btn-success" style={{marginBottom: '20px'}}>Add Campus</button></Link>
        <div className="card-columns">
          {this.props.campuses.map(campus =>
              <div className="card" key={campus.id}
              style={{
                boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
              }}>
              <img src={campus.imageUrl} className="card-img-top" />
                <div className="card-body">
                  <div className="container">
                    <Link to={`/campuses/${campus.id}`}>
                      <h5 className="card-title">{campus.name}</h5>
                    </Link>
                    <p>Students attending: {this.props.studentsCount(campus, this.props.students)}</p>
                    <button type="submit" className="btn btn-danger btn-sm pull-right" onClick={() => this.props.removeCampus(campus.id)}>Delete</button>
                  </div>
                </div>
              </div>
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);

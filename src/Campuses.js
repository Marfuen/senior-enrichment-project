import React, {Component} from 'react';
import {removeCampus} from "./store";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';


class Campuses extends Component {
  render(){
    return(
      <div className="card-columns">
        {this.props.campuses.map(campus =>
            <div className="card" key={campus.id}>
            <img src={campus.imageUrl} className="card-img-top" />
              <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8">
                    <Link to={`/campuses/${campus.id}`}>
                      <h5 className="card-title">{campus.name}</h5>
                    </Link>
                  </div>
                  <div className="col-sm-4">
                    <button type="submit" className="btn btn-danger btn-sm" onClick={() => this.props.removeCampus(campus.id)}>Delete</button>
                  </div>
                </div>
                </div>
              </div>
            </div>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCampus: (id) => dispatch(removeCampus(id)),
  }
}

const mapStateToProps = ({campuses}) => {
  return {
    campuses,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);

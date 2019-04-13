import React, {Component} from 'react';
import {fetchCampuses} from "./store";
import { connect } from 'react-redux';


class Campuses extends Component {
  componentDidMount(){
    this.props.getCampuses();
  }
  render(){
    return(
      <div className="card-columns">
        {this.props.campuses.map(campus =>
          <div key={campus.id} className="card">
          <img src={campus.imageUrl} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{campus.name}</h5>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => dispatch(fetchCampuses()),
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);

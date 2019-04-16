import React, { Component } from 'react';
import {createCampus} from './store';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

class CreateCampus extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      address: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange({target}){
    this.setState({
      [target.name]: target.value
    })
  }
  onSubmit(ev){
    ev.preventDefault();
    this.props.createCampus(this.state)
      .catch(e => console.log(e))
    this.props.history.push('/campuses')
  }
  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="Campus Name">Campus Name: </label>
          <input type="text" className="form-control" placeholder="MIT" onChange={this.onChange} name="name" value={this.state.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="Campus Address">Campus Address</label>
          <input className="form-control" placeholder="123rd ave, 28th st." onChange={this.onChange} name="address" value={this.state.address}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createCampus: (campus) => dispatch(createCampus(campus)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(CreateCampus));

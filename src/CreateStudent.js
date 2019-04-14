import React, {Component} from "react";
import { connect } from "react-redux";
import {createStudent} from './store';

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (student) => dispatch(createStudent(student)),
  };
};

class CreateStudent extends Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange({target}){
    this.setState({
      [target.name]: target.value
    });
  };
  onSubmit(ev){
    ev.preventDefault();
    this.props.createStudent(this.state)
      .catch(e => console.log(e));
    this.props.history.push('/students');
  }
  render(){
    console.log(this.state);
    return(
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="First Name">First Name: </label>
            <input type="text" className="form-control" placeholder="John" onChange={this.onChange} name="firstName" value={this.state.firstName}/>
          </div>
          <div className="col form-group">
            <label htmlFor="Last Name">Last Name</label>
            <input className="form-control" placeholder="Doe" onChange={this.onChange} name="lastName" value={this.state.lastName}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" placeholder="email@email.com" onChange={this.onChange} name="email" value={this.state.email}/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Submit</button>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(CreateStudent);

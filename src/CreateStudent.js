/* eslint-disable complexity */
import React, {Component} from "react";
import { connect } from "react-redux";
import {createStudent} from './store';

const mapDispatchToProps = (dispatch) => {
  return {
    createStudent: (student) => dispatch(createStudent(student)),
  };
};

const mapStateToProps = ({campuses, students}, props) => {
  return {
    campuses,
    students,
    id: props.match.params.id,
  }
}

class CreateStudent extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
      campusId: 0,
      imageUrl: '',
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
  componentDidUpdate(prevState){
    if(this.props.id && !prevState.id){
      const student = this.props.students.find(student => student.id === this.props.id);
      this.setState({
        firstName: student.firstName || '',
        lastName: student.lastName || '',
        email: student.email || '',
        gpa: student.gpa || 0,
        campusId: student.campusId || 0,
        imageUrl: student.imageUrl || '',
      });
    };
  }
  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col form-group">
            <label htmlFor="First Name">First Name: </label>
            <input type="text" className="form-control" placeholder="John" onChange={this.onChange} name="firstName" value={this.state.firstName} required/>
          </div>
          <div className="col form-group">
            <label htmlFor="Last Name">Last Name</label>
            <input className="form-control" placeholder="Doe" onChange={this.onChange} name="lastName" value={this.state.lastName} required/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control" placeholder="email@email.com" onChange={this.onChange} name="email" value={this.state.email} required/>
        </div>
        <div className="form-group">
          <label htmlFor="gpa">Gpa</label>
          <input type="number" className="form-control" placeholder="4.0" onChange={this.onChange} name="gpa" value={this.state.gpa} required min="0" max="4.0"/>
        </div>
        <div className="form-group">
          <label htmlFor="Campus">Campus</label>
          <select className="form-control" name="campusId" onChange={this.onChange} value={this.state.campusId}>
            {this.props.campuses.map(campus =>
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Avatar Image</label>
          <input type="text" className="form-control" placeholder="https://www.google.com/img.png" onChange={this.onChange} name="imageUrl" value={this.state.imageUrl}/>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop: '20px'}}>Submit</button>
      </form>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudent);

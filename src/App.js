import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Switch} from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import {connect} from 'react-redux';
import SingleStudent from './SingleStudent';
import CreateCampus from './CreateCampus'
import CreateStudent from './CreateStudent';
import {fetchStudents, fetchCampuses} from './store';

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => dispatch(fetchCampuses()),
    getStudents: () => dispatch(fetchStudents()),
  }
}

class App extends Component {
  componentDidMount(){
    this.props.getCampuses();
    this.props.getStudents();
  }
  render(){
    return(
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/campuses" component={Campuses}/>
            <Route exact path="/students" component={Students}/>
            <Route exact path="/campuses/:id" component={SingleCampus}/>
            <Route exact path="/students/:id" component={SingleStudent}/>
            <Route exact path="/add/campus" component={CreateCampus}/>
            <Route exact path="/edit/campus/:id" component={CreateCampus}/>
            <Route exact path="/add/student" component={CreateStudent}/>
            <Route exact path="/edit/student/:id" component={CreateStudent}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(App);

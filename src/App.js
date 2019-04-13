import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';
import SingleCampus from './SingleCampus';
import {connect} from 'react-redux';
import SingleStudent from './SingleStudent';

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  }
}

class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/campuses" component={Campuses}/>
          <Route exact path="/students" component={Students}/>
          <Route exact path="/campuses/:id" component={SingleCampus}/>
          <Route exact path="/students/:id" component={SingleStudent}/>
        </Switch>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App);

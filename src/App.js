import React, { Component } from 'react';
import Navbar from './Navbar';
import {Route, Switch, Redirect} from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';

class App extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route path="/campuses" component={Campuses}/>
          <Route path="/students" component={Students}/>
        </Switch>
      </div>
    )
  }
}

export default App;

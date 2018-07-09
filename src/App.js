import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Cesium from './pages/Cesium';
import Cad from './pages/Cad';
import Data from './pages/Data'
import PageNotFound from './pages/404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Cesium}/>
          <Route exact path='/cad' component={Cad}/>
          <Route exact path='/data' component={Data}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Home from './views/Home';
import Dashboard from './views/Dashboard';
import TopBy from './views/TopBy';
import PageNotFound from './views/PageNotFound';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
        
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/top-by/:type" component={TopBy}/>
            <Route exact path="/caca" component={Home}/>
            <Route component={PageNotFound}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

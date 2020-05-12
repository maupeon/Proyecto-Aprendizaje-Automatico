import React from 'react';
import './App.css';
import Home from './views/Home';
import TopBy from './views/TopBy';
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
            <Route exact path="/top-by" component={TopBy}/>
            <Route exact path="/caca" component={Home}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

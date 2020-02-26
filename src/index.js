import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Release from './container/Release'
import Sprint from './container/Sprints'
import Backlog from './container/Backlog'
import Home from './container/Home';

ReactDOM.render(
  <Router history={hashHistory}>

      <Route path='/' component={App} >
        <IndexRoute component={Home}/>
        <Route path='/release' component={Release} />
        <Route path='/sprint' component={Sprint} />
        <Route path='/backlog' component={Backlog} />
      </Route>


  </Router>,
  document.getElementById('root')
);

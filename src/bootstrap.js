import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from "react-router-dom";

import App from './components/app';
import history from './history';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={App}/>
        </Switch>
      </Router>,
    document.querySelector('.app-wrapper')
    );
}

document.addEventListener('DOMContentLoaded', main);

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";

import App from './components/app';
import history from './history';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

function main() {
  ReactDOM.render(
      <Router history={history}>
        <App/>
      </Router>,
    document.querySelector('.app-wrapper')
    );
}

document.addEventListener('DOMContentLoaded', main);

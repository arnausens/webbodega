import React, { Component } from 'react';

import TopComponent from "./TopComponent";
import BottomPage from './bottomPage';
import HomePage from './homePage';



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <TopComponent/>
        <HomePage/>
        <BottomPage/>
      </div>
    );
  }
}

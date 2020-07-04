import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';

import BaeCalendar from './components/calendar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center-item">
          <BaeCalendar theme="salmon" />
        </div>
      </div>
    );
  }
}

export default hot(module)(App);

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import BaeCalendar from './components/calendar/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>hello world</p>
        <BaeCalendar />
      </div>
    );
  }
}

export default hot(module)(App);

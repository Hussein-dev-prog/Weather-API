import React, { Component } from 'react';
import Search from './Search.js'
import CurrentDeg from './CurrentDeg.js'
import NextDeg from './NextDeg.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <CurrentDeg />
        <NextDeg />
      </div>
    );
  }
}
export default App;

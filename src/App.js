import React, { Component } from 'react';
import './App.css';
import GetAPI from './components/DDragon_API/GetAPI.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetAPI />
      </div>
    );
  }
}

export default App;

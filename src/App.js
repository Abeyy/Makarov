import React, { Component } from 'react';
import './App.css';
import GetAPI from './components/DDragon_API/GetAPI.js';
import ChampList from './components/ChampList/ChampList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
       	<ChampList />
      </div>
    );
  }
}

export default App;

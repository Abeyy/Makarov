import React, { Component } from 'react';
import './App.css';
import GetAPI from './components/DDragon_API/GetAPI.js';
import ChampTypeButton from './components/ChampTypeButton/ChampTypeButton.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChampTypeButton>Fighter</ChampTypeButton>
        <ChampTypeButton>Tank</ChampTypeButton>
        <ChampTypeButton>Assassin</ChampTypeButton>
        <ChampTypeButton>Mage</ChampTypeButton>
        <ChampTypeButton>Marksman</ChampTypeButton>
        <ChampTypeButton>Support</ChampTypeButton>
      </div>
    );
  }
}

export default App;

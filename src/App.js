import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi am React App</h1>
        <p>Oww this is really working!!</p>
        <Person/>
      </div>
    )
  }
}

export default App;

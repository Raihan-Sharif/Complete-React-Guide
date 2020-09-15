import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Raihan", age: 29 },
      { name: "Tanha", age: 25 },
      { name: "Max", age: 20 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi am React App</h1>
        <p>Oww this is really working!!</p>
        <button onClick={this.switchNameHandler}> Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobby is Playing Cricket.</Person>
      </div>
    )
  }
}

export default App;

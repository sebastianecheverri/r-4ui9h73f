import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      repeater: "",
    }
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={this.updateRepeater.bind(this)} placeholder="Empieza a escribir algo" />
        <p className="repeater">{this.state.repeater}</p>
      </div>
    );
  }
  updateRepeater (event) {
    this.setState ({
      repeater: event.target.value
    })
  }

}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  this.state = {
    data: [] 
  };

  handleClick = (e) => {
    let data = e.name;
    this.setState({data});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleClick}>Click me for data</button>
          <ul>
            {
              for (
        </header>
      </div>
    );
  }
}

export default App;

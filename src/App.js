import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="title">Color Box</h1>
        </header>

        <main className="App-main">
          <div className="box">
            <input type="color" value="#ff0000" className="color-selector" />
          </div>
        </main>

        <footer className="App-footer">
          <p>Made by Grace Casale</p>
        </footer>

      </div>
    );
  }
}

export default App;

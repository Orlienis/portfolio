import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Language from './components/lang/language';


class App extends Component {
  render() {
    let lang_list = ["ENG","RUS","ESP"]; /* CREAR UNA CLASE ENUM CON TODOS LOS IDIOMAS */

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link text-warning"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Language lang={lang_list} />
        </header>
      </div>
    );
  }
}

export default App;

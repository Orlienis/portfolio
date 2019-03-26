import React, { Component } from 'react';
import './App.css';
import Language from './components/lang/language';
import './components/lang/language.css';
import Utils from './util/STATIC_DATA';


class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Language lang={Utils.COUNTRIES} />
        </header>
      </div>
    );
  }
}

export default App;

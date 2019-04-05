import React, { Component } from 'react';
import './css/App.css';
import LANGUAJE from './components/lang/LANGUAJE';
import './components/lang/language.css';
import Utils from './util/Static_data';


class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <LANGUAJE lang={Utils.COUNTRIES} />
        </header>
      </div>
    );
  }
}

export default App;

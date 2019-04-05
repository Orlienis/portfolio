import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import LIST from "./components/LIST";
import Utils from './util/Static_data'


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <LIST header={""} items={Utils.MENU}/>
    , document.getElementById('here'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

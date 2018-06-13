import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <footer className="App-footer">
                    <h4>Made with React</h4>
                    <img src={logo} className="App-logo" alt="logo"/>
                </footer>
            </div>
        );
    }
}

export default App;

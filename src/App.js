import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <p>
                        Welcome to TU | Rocket League's home page!
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;

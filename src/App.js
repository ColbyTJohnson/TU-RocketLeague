import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <body className="App">
                <div className="App-content">
                    <p>
                        Welcome to TU | Rocket League's home page!
                    </p>
                </div>
                <Footer />
            </body>
        );
    }
}

export default App;

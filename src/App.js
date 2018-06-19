import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <body className="App">
                <Header />
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

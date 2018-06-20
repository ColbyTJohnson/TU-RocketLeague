import React, { Component } from 'react';
import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CardView from './containers/CardView/CardView';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                    <div className="App-content">
                        <CardView />
                    </div>
                <Footer />
            </div>
        );
    }
}

export default App;

import React from 'react';
import logo from '../assets/logo.svg';

import './Footer.css';

const footer = () => (
    <div className="App-footer">
        <h4>Made with React</h4>
        <img src={logo} className="App-logo" alt="logo"/>
    </div>
);

export default footer;
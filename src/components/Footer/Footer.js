import React from 'react';
import logo from '../../assets/logo.svg';

import './Footer.css';

const footer = () => (
    <div className="App-footer">
        <p>Made with React</p>
        <img src={logo} className="App-logo" alt="logo"/>
    </div>
);

export default footer;
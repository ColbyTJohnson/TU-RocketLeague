import React from 'react';

import RLS from '../../assets/rls_partner_horizontal_large.png';
import './Header.css';

const header = () => (
    <div className="Header">
        <h2>TU | Rocket League</h2>
        <img src={RLS}  className="RLS" alt="RocketLeagueStats" onClick={() => {window.open('https://rocketleaguestats.com/', '_blank')}}></img>
    </div>
);

export default header;
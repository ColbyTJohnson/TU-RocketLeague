import React from 'react';

import './PlayerCard.css';
import perino from '../../../assets/perino.jpg';

const playerCard = (props) => (
    <div className="Card">
        <div className="Player-header">
            <img src={perino} alt="perino's ugly car" className="Photo" />
            <div className="Player-name">
                <p className="Name">{props.name}</p>
            </div>
        </div>
    </div>
);

export default playerCard;
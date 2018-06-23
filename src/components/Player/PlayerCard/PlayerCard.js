import React from 'react';

import './PlayerCard.css';

const playerCard = (props) => (
    <div className="Card">
        <div className="Player-header">
            <img src={props.img} alt="perino's ugly car" className="Photo" />
            <div className="Player-name">
                <p className="Name">{props.name}</p>
            </div>
        </div>
    </div>
);

export default playerCard;
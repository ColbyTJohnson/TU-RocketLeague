import React from 'react';

import PlayerCard from '../../components/Player/PlayerCard/PlayerCard';
import './CardView.css';

const cardView = () => (
    <div className="CardView">
        <PlayerCard name={"Cierex"} />
        <PlayerCard name={"s a d b o y"} />
        <PlayerCard name={"Zenlos"} />
    </div>
);

export default cardView;
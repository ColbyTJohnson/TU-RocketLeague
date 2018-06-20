import React from 'react';

import PlayerCard from '../../components/Player/PlayerCard/PlayerCard';
import './CardView.css';

const cardView = () => (
    <div className="CardView">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
    </div>
);

export default cardView;
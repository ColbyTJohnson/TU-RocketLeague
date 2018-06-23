import React from 'react';

import PlayerCard from '../../components/Player/PlayerCard/PlayerCard';
import './CardView.css';

import cierex from '../../assets/cie.jpg';
import sadboy from '../../assets/sad.jpg';
import zenlos from '../../assets/zen.jpg';


const cardView = () => (
    <div className="CardView">
        <PlayerCard
            name={"Cierex"}
            img={cierex} />
        <PlayerCard
            name={"s a d b o y"}
            img={sadboy} />
        <PlayerCard
            name={"Zenlos"}
            img={zenlos} />
    </div>
);

export default cardView;
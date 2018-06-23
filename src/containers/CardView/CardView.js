import React from 'react';

import PlayerCard from '../../components/Player/PlayerCard/PlayerCard';
import './CardView.css';

import cierex from '../../assets/cie.jpg';
import sadboy from '../../assets/sad.jpg';
import zenlos from '../../assets/zen.jpg';

import ranks from '../../store/Ranks';


const cardView = () => (
    <div className="CardView">
        <PlayerCard
            name={"Cierex"}
            img={cierex}
            rank={ranks.bronze_1} />
        <PlayerCard
            name={"s a d b o y"}
            img={sadboy}
            rank={ranks.gc} />
        <PlayerCard
            name={"Zenlos"}
            img={zenlos}
            rank={ranks.champ_2} />
    </div>
);

export default cardView;
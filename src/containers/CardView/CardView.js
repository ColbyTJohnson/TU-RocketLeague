import React, { Component } from 'react';
import rls from 'rls-api';

import PlayerCard from '../../components/Player/PlayerCard/PlayerCard';
import Keys from '../../store/Keys';
import './CardView.css';

import cierex from '../../assets/cie.jpg';
import sadboy from '../../assets/sad.jpg';
import zenlos from '../../assets/zen.jpg';

import ranks from '../../store/Ranks';


class CardView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sadboyGoals: 0,
            sadboyAssists: 0,
            sadboySaves: 0,
        };

        this.setStats = this.setStats.bind(this);
    }

    setStats (goals, assists, saves) {
        this.setState({
            sadboyGoals: goals,
            sadboyAssists: assists,
            sadboySaves: saves,
        });

        console.log(this.state.goals);
        console.log(this.state.assists);
        console.log(this.state.saves);
    }

    componentDidMount () {
        // let client = new rls.Client({
        //     token: Keys.rlsToken
        // });
        //
        // client.getPlayer("76561198168703285", rls.platforms.STEAM, function(status, data){
        //     if(status === 200){
        //         console.log("-- Player Data:");
        //         console.log("   Display name: " + data.displayName);
        //         console.log("   Goals: " + data.stats.goals);
        //         console.log("   Assists: " + data.stats.assists);
        //         console.log("   Saves: " + data.stats.saves);
        //         let goals = data.stats.goals;
        //         let assists = data.stats.assists;
        //         let saves = data.stats.saves;
        //         this.setStats(goals, assists, saves);
        //     } else {
        //         console.log("-- getPlayer failed: " + status);
        //     }
        // });
    }

    render () {
        return (
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
    }
}

export default CardView;
import React, { Component } from 'react';
import 'whatwg-fetch';

import PlayerCard from '../../components/Player/PlayerCard/PlayerCard';
import Keys from '../../store/Keys';
import './CardView.css';

import cierex from '../../assets/cie.jpg';
import sadboy from '../../assets/sad.jpg';
import zenlos from '../../assets/zen.jpg';

class CardView extends Component {
    state = {
        sadboyGoals: 0,
        sadboyAssists: 0,
        sadboySaves: 0,
        sadboySoloRank: 0,
        sadboyDoublesRank: 0,
        sadboyStandardRank: 0,
        sadboySSRank: 0,
        zenlosGoals: 0,
        zenlosAssists: 0,
        zenlosSaves: 0,
        zenlosSoloRank: 0,
        zenlosDoublesRank: 0,
        zenlosStandardRank: 0,
        zenlosSSRank: 0,
        cierexGoals: 0,
        cierexAssists: 0,
        cierexSaves: 0,
        cierexSoloRank: 0,
        cierexDoublesRank: 0,
        cierexStandardRank: 0,
        cierexSSRank: 0,
        loading: true,
    };

    componentDidMount () {
        fetch('https://api.rocketleaguestats.com/v1/player/batch', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': Keys.rlsToken,
            },
            body: JSON.stringify([
                    {
                        "platformId": "1",
                        "uniqueId": "76561198168703285",
                    },
                    {
                        "platformId": "1",
                        "uniqueId": "76561198073429696",
                    },
                    {
                        "platformId": "1",
                        "uniqueId": "76561198067709994",
                    }
                ])
        }).then(res => {
            return res.json();
        }).then(res => {
            this.setState({
                sadboyGoals: res[0].stats.goals,
                sadboyAssists: res[0].stats.assists,
                sadboySaves: res[0].stats.saves,
                sadboySoloRank: res[0].rankedSeasons[8][10].tier,
                sadboyDoublesRank: res[0].rankedSeasons[8][11].tier,
                sadboyStandardRank: res[0].rankedSeasons[8][13].tier,
                sadboySSRank: res[0].rankedSeasons[8][12].tier,
                zenlosGoals: res[1].stats.goals,
                zenlosAssists: res[1].stats.assists,
                zenlosSaves: res[1].stats.saves,
                zenlosSoloRank: res[1].rankedSeasons[8][10].tier,
                zenlosDoublesRank: res[1].rankedSeasons[8][11].tier,
                zenlosStandardRank: res[1].rankedSeasons[8][13].tier,
                zenlosSSRank: res[1].rankedSeasons[8][12].tier,
                cierexGoals: res[2].stats.goals,
                cierexAssists: res[2].stats.assists,
                cierexSaves: res[2].stats.saves,
                cierexSoloRank: res[2].rankedSeasons[8][10].tier,
                cierexDoublesRank: res[2].rankedSeasons[8][11].tier,
                cierexStandardRank: res[2].rankedSeasons[8][13].tier,
                cierexSSRank: res[2].rankedSeasons[8][12].tier,
                loading: false
            });
        });
    }

    render () {
        if (this.state.loading === true) {
            return (
                <div className="loader">
                    <p>Loading...</p>
                </div>
            );
        }

        if (this.state.loading === false) {
            return (
                <div className="CardView">
                    <PlayerCard
                        name={"Cierex"}
                        img={cierex}
                        soloRank={this.state.cierexSoloRank}
                        doublesRank={this.state.cierexDoublesRank}
                        standardRank={this.state.cierexStandardRank}
                        ssRank={this.state.cierexSSRank}
                        goals={this.state.cierexGoals}
                        assists={this.state.cierexAssists}
                        saves={this.state.cierexSaves} />
                    <PlayerCard
                        name={"s a d b o y"}
                        img={sadboy}
                        soloRank={this.state.sadboySoloRank}
                        doublesRank={this.state.sadboyDoublesRank}
                        standardRank={this.state.sadboyStandardRank}
                        ssRank={this.state.sadboySSRank}
                        goals={this.state.sadboyGoals}
                        assists={this.state.sadboyAssists}
                        saves={this.state.sadboySaves} />
                    <PlayerCard
                        name={"Zenlos"}
                        img={zenlos}
                        soloRank={this.state.zenlosSoloRank}
                        doublesRank={this.state.zenlosDoublesRank}
                        standardRank={this.state.zenlosStandardRank}
                        ssRank={this.state.zenlosSSRank}
                        goals={this.state.zenlosGoals}
                        assists={this.state.zenlosAssists}
                        saves={this.state.zenlosSaves} />
                </div>
            );
        }
    }
}

export default CardView;
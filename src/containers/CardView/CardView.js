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
        perinoGoals: 0,
        perinoAssists: 0,
        perinoSaves: 0,
        perinoSoloRank: 0,
        perinoDoublesRank: 0,
        perinoStandardRank: 0,
        perinoSSRank: 0,
        crucioGoals: 0,
        crucioAssists: 0,
        crucioSaves: 0,
        crucioSoloRank: 0,
        crucioDoublesRank: 0,
        crucioStandardRank: 0,
        crucioSSRank: 0,
        spookyGoals: 0,
        spookyAssists: 0,
        spookySaves: 0,
        spookySoloRank: 0,
        spookyDoublesRank: 0,
        spookyStandardRank: 0,
        spookySSRank: 0,
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
                        "uniqueId": Keys.sadboyId,
                    },
                    {
                        "platformId": "1",
                        "uniqueId": Keys.zenlosId,
                    },
                    {
                        "platformId": "1",
                        "uniqueId": Keys.cierexId,
                    },
                    {
                        "platformId": "1",
                        "uniqueId": Keys.perinoId,
                    },
                    {
                        "platformId": "1",
                        "uniqueId": Keys.crucioId,
                    },
                    {
                        "platformId": "1",
                        "uniqueId": Keys.spookyId,
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
                perinoGoals: res[3].stats.goals,
                perinoAssists: res[3].stats.assists,
                perinoSaves: res[3].stats.saves,
                perinoSoloRank: res[3].rankedSeasons[8][10].tier,
                perinoDoublesRank: res[3].rankedSeasons[8][11].tier,
                perinoStandardRank: res[3].rankedSeasons[8][13].tier,
                perinoSSRank: res[3].rankedSeasons[8][12].tier,
                crucioGoals: res[4].stats.goals,
                crucioAssists: res[4].stats.assists,
                crucioSaves: res[4].stats.saves,
                crucioSoloRank: res[4].rankedSeasons[8][10].tier,
                crucioDoublesRank: res[4].rankedSeasons[8][11].tier,
                crucioStandardRank: res[4].rankedSeasons[8][13].tier,
                crucioSSRank: res[4].rankedSeasons[8][12].tier,
                spookyGoals: res[5].stats.goals,
                spookyAssists: res[5].stats.assists,
                spookySaves: res[5].stats.saves,
                spookySoloRank: res[5].rankedSeasons[8][10].tier,
                spookyDoublesRank: res[5].rankedSeasons[8][11].tier,
                spookyStandardRank: res[5].rankedSeasons[8][13].tier,
                spookySSRank: res[5].rankedSeasons[8][12].tier,
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
                <div className="Content">
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
                            name={"Perino"}
                            img={zenlos}
                            soloRank={this.state.perinoSoloRank}
                            doublesRank={this.state.perinoDoublesRank}
                            standardRank={this.state.perinoStandardRank}
                            ssRank={this.state.perinoSSRank}
                            goals={this.state.perinoGoals}
                            assists={this.state.perinoAssists}
                            saves={this.state.perinoSaves} />
                    </div>
                    <div className="CardView">
                        <PlayerCard
                            name={"Zenlos"}
                            img={zenlos}
                            soloRank={this.state.crucioSoloRank}
                            doublesRank={this.state.crucioDoublesRank}
                            standardRank={this.state.crucioStandardRank}
                            ssRank={this.state.crucioSSRank}
                            goals={this.state.crucioGoals}
                            assists={this.state.crucioAssists}
                            saves={this.state.crucioSaves} />
                        <PlayerCard
                            name={"cRUCiO"}
                            img={sadboy}
                            soloRank={this.state.crucioSoloRank}
                            doublesRank={this.state.crucioDoublesRank}
                            standardRank={this.state.crucioStandardRank}
                            ssRank={this.state.crucioSSRank}
                            goals={this.state.crucioGoals}
                            assists={this.state.crucioAssists}
                            saves={this.state.crucioSaves} />
                        <PlayerCard
                            name={"sp00ky"}
                            img={zenlos}
                            soloRank={this.state.spookySoloRank}
                            doublesRank={this.state.spookyDoublesRank}
                            standardRank={this.state.spookyStandardRank}
                            ssRank={this.state.spookySSRank}
                            goals={this.state.spookyGoals}
                            assists={this.state.spookyAssists}
                            saves={this.state.spookySaves} />
                    </div>
                </div>
            );
        }
    }
}

export default CardView;
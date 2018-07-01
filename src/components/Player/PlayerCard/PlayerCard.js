import React, { Component } from 'react';

import Playstyle from './Playstyle/Playstyle';
import './PlayerCard.css';

import ranks from '../../../store/Ranks';

class playerCard extends Component {
    state = {
        soloRank: null,
        doublesRank: null,
        standardRank: null,
        ssRank: null,
    };

    componentDidMount () {
        this.handleSoloTier();
        this.handleDoublesTier();
        this.handleStandardTier();
        this.handleSSTier();
    }

    handleSoloTier () {
        switch (this.props.soloRank) {
            case 0: this.setState({ soloRank: ranks.unranked }); break;
            case 1: this.setState({ soloRank: ranks.bronze_1 }); break;
            case 2: this.setState({ soloRank: ranks.bronze_2 }); break;
            case 3: this.setState({ soloRank: ranks.bronze_3 }); break;
            case 4: this.setState({ soloRank: ranks.silver_1 }); break;
            case 5: this.setState({ soloRank: ranks.silver_2 }); break;
            case 6: this.setState({ soloRank: ranks.silver_3 }); break;
            case 7: this.setState({ soloRank: ranks.gold_1 }); break;
            case 8: this.setState({ soloRank: ranks.gold_2 }); break;
            case 9: this.setState({ soloRank: ranks.gold_3 }); break;
            case 10: this.setState({ soloRank: ranks.plat_1 }); break;
            case 11: this.setState({ soloRank: ranks.plat_2 }); break;
            case 12: this.setState({ soloRank: ranks.plat_3 }); break;
            case 13: this.setState({ soloRank: ranks.diamond_1 }); break;
            case 14: this.setState({ soloRank: ranks.diamond_2 }); break;
            case 15: this.setState({ soloRank: ranks.diamond_3 }); break;
            case 16: this.setState({ soloRank: ranks.champ_1 }); break;
            case 17: this.setState({ soloRank: ranks.champ_2 }); break;
            case 18: this.setState({ soloRank: ranks.champ_3 }); break;
            case 19: this.setState({ soloRank: ranks.gc }); break;
            default: this.setState({ soloRank: ranks.unranked });
        }
    };

    handleDoublesTier () {
        switch (this.props.doublesRank) {
            case (0): this.setState({ doublesRank: ranks.unranked }); break;
            case (1): this.setState({ doublesRank: ranks.bronze_1 }); break;
            case (2): this.setState({ doublesRank: ranks.bronze_2 }); break;
            case (3): this.setState({ doublesRank: ranks.bronze_3 }); break;
            case (4): this.setState({ doublesRank: ranks.silver_1 }); break;
            case (5): this.setState({ doublesRank: ranks.silver_2 }); break;
            case (6): this.setState({ doublesRank: ranks.silver_3 }); break;
            case (7): this.setState({ doublesRank: ranks.gold_1 }); break;
            case (8): this.setState({ doublesRank: ranks.gold_2 }); break;
            case (9): this.setState({ doublesRank: ranks.gold_3 }); break;
            case (10): this.setState({ doublesRank: ranks.plat_1 }); break;
            case (11): this.setState({ doublesRank: ranks.plat_2 }); break;
            case (12): this.setState({ doublesRank: ranks.plat_3 }); break;
            case (13): this.setState({ doublesRank: ranks.diamond_1 }); break;
            case (14): this.setState({ doublesRank: ranks.diamond_2 }); break;
            case (15): this.setState({ doublesRank: ranks.diamond_3 }); break;
            case (16): this.setState({ doublesRank: ranks.champ_1 }); break;
            case (17): this.setState({ doublesRank: ranks.champ_2 }); break;
            case (18): this.setState({ doublesRank: ranks.champ_3 }); break;
            case (19): this.setState({ doublesRank: ranks.gc }); break;
            default: this.setState({ doublesRank: ranks.unranked });
        }
    }

    handleSSTier () {
        switch (this.props.ssRank) {
            case (0): this.setState({ ssRank: ranks.unranked }); break;
            case (1): this.setState({ ssRank: ranks.bronze_1 }); break;
            case (2): this.setState({ ssRank: ranks.bronze_2 }); break;
            case (3): this.setState({ ssRank: ranks.bronze_3 }); break;
            case (4): this.setState({ ssRank: ranks.silver_1 }); break;
            case (5): this.setState({ ssRank: ranks.silver_2 }); break;
            case (6): this.setState({ ssRank: ranks.silver_3 }); break;
            case (7): this.setState({ ssRank: ranks.gold_1 }); break;
            case (8): this.setState({ ssRank: ranks.gold_2 }); break;
            case (9): this.setState({ ssRank: ranks.gold_3 }); break;
            case (10): this.setState({ ssRank: ranks.plat_1 }); break;
            case (11): this.setState({ ssRank: ranks.plat_2 }); break;
            case (12): this.setState({ ssRank: ranks.plat_3 }); break;
            case (13): this.setState({ ssRank: ranks.diamond_1 }); break;
            case (14): this.setState({ ssRank: ranks.diamond_2 }); break;
            case (15): this.setState({ ssRank: ranks.diamond_3 }); break;
            case (16): this.setState({ ssRank: ranks.champ_1 }); break;
            case (17): this.setState({ ssRank: ranks.champ_2 }); break;
            case (18): this.setState({ ssRank: ranks.champ_3 }); break;
            case (19): this.setState({ ssRank: ranks.gc }); break;
            default: this.setState({ ssRank: ranks.unranked });
        }
    }

    handleStandardTier () {
        switch (this.props.standardRank) {
            case (0): this.setState({ standardRank: ranks.unranked }); break;
            case (1): this.setState({ standardRank: ranks.bronze_1 }); break;
            case (2): this.setState({ standardRank: ranks.bronze_2 }); break;
            case (3): this.setState({ standardRank: ranks.bronze_3 }); break;
            case (4): this.setState({ standardRank: ranks.silver_1 }); break;
            case (5): this.setState({ standardRank: ranks.silver_2 }); break;
            case (6): this.setState({ standardRank: ranks.silver_3 }); break;
            case (7): this.setState({ standardRank: ranks.gold_1 }); break;
            case (8): this.setState({ standardRank: ranks.gold_2 }); break;
            case (9): this.setState({ standardRank: ranks.gold_3 }); break;
            case (10): this.setState({ standardRank: ranks.plat_1 }); break;
            case (11): this.setState({ standardRank: ranks.plat_2 }); break;
            case (12): this.setState({ standardRank: ranks.plat_3 }); break;
            case (13): this.setState({ standardRank: ranks.diamond_1 }); break;
            case (14): this.setState({ standardRank: ranks.diamond_2 }); break;
            case (15): this.setState({ standardRank: ranks.diamond_3 }); break;
            case (16): this.setState({ standardRank: ranks.champ_1 }); break;
            case (17): this.setState({ standardRank: ranks.champ_2 }); break;
            case (18): this.setState({ standardRank: ranks.champ_3 }); break;
            case (19): this.setState({ standardRank: ranks.gc }); break;
            default: this.setState({ standardRank: ranks.unranked });
        }
    }

    render() {
        return (
            <div className="Card">
                <div className="Player-header">
                    <img src={this.props.img} alt="profile-pic" className="Photo" />
                    <div className="Player-name">
                        <p className="Name">{this.props.name}</p>
                    </div>
                </div>
                <div className="Player-stats">
                    <div className="Ranks">
                        <h4>Ranks</h4>
                        <hr/>
                        <div className="Rank-list">
                            <p>Solo: <img src={this.state.soloRank} alt="rank" className="Rank-icon" /></p>
                            <p>Doubles: <img src={this.state.doublesRank} alt="rank" className="Rank-icon" /></p>
                            <p>Standard: <img src={this.state.standardRank} alt="rank" className="Rank-icon" /></p>
                            <p>Solo Standard: <img src={this.state.ssRank} alt="rank" className="Rank-icon" /></p>
                        </div>
                    </div>
                    <div className="Playstyle">
                        <h4>Playstyle</h4>
                        <hr/>
                        <Playstyle
                            goals={this.props.goals}
                            assists={this.props.assists}
                            saves={this.props.saves} />
                    </div>
                </div>
            </div>
        );
    }
}

export default playerCard;
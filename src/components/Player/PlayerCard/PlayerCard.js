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
        soloRankString: "",
        doublesRankString: "",
        standardRankString: "",
        ssRankString: "",
    };

    componentDidMount () {
        this.handleSoloTier();
        this.handleDoublesTier();
        this.handleStandardTier();
        this.handleSSTier();
    }

    handleSoloTier () {
        switch (this.props.soloRank) {
            case 0: this.setState({ soloRank: ranks.unranked, soloRankString: "Unranked" }); break;
            case 1: this.setState({ soloRank: ranks.bronze_1, soloRankString: "Bronze I"  }); break;
            case 2: this.setState({ soloRank: ranks.bronze_2, soloRankString: "Bronze II"  }); break;
            case 3: this.setState({ soloRank: ranks.bronze_3, soloRankString: "Bronze III"  }); break;
            case 4: this.setState({ soloRank: ranks.silver_1, soloRankString: "Silver I"  }); break;
            case 5: this.setState({ soloRank: ranks.silver_2, soloRankString: "Silver II"  }); break;
            case 6: this.setState({ soloRank: ranks.silver_3, soloRankString: "Silver III"  }); break;
            case 7: this.setState({ soloRank: ranks.gold_1, soloRankString: "Gold I"  }); break;
            case 8: this.setState({ soloRank: ranks.gold_2, soloRankString: "Gold II"  }); break;
            case 9: this.setState({ soloRank: ranks.gold_3, soloRankString: "Gold III"  }); break;
            case 10: this.setState({ soloRank: ranks.plat_1, soloRankString: "Platinum I"  }); break;
            case 11: this.setState({ soloRank: ranks.plat_2, soloRankString: "Platinum II"  }); break;
            case 12: this.setState({ soloRank: ranks.plat_3, soloRankString: "Platinum III"  }); break;
            case 13: this.setState({ soloRank: ranks.diamond_1, soloRankString: "Diamond I"  }); break;
            case 14: this.setState({ soloRank: ranks.diamond_2, soloRankString: "Diamond II"  }); break;
            case 15: this.setState({ soloRank: ranks.diamond_3, soloRankString: "Diamond III"  }); break;
            case 16: this.setState({ soloRank: ranks.champ_1, soloRankString: "Champion I"  }); break;
            case 17: this.setState({ soloRank: ranks.champ_2, soloRankString: "Champion II"  }); break;
            case 18: this.setState({ soloRank: ranks.champ_3, soloRankString: "Champion III"  }); break;
            case 19: this.setState({ soloRank: ranks.gc, soloRankString: "Grand Champion"  }); break;
            default: this.setState({ soloRank: ranks.unranked, soloRankString: "Unranked" });
        }
    };

    handleDoublesTier () {
        switch (this.props.doublesRank) {
            case (0): this.setState({ doublesRank: ranks.unranked, doublesRankString: "Unranked" }); break;
            case (1): this.setState({ doublesRank: ranks.bronze_1, doublesRankString: "Bronze I" }); break;
            case (2): this.setState({ doublesRank: ranks.bronze_2, doublesRankString: "Bronze II" }); break;
            case (3): this.setState({ doublesRank: ranks.bronze_3, doublesRankString: "Bronze III" }); break;
            case (4): this.setState({ doublesRank: ranks.silver_1, doublesRankString: "Silver I" }); break;
            case (5): this.setState({ doublesRank: ranks.silver_2, doublesRankString: "Silver II" }); break;
            case (6): this.setState({ doublesRank: ranks.silver_3, doublesRankString: "Silver III" }); break;
            case (7): this.setState({ doublesRank: ranks.gold_1, doublesRankString: "Gold I" }); break;
            case (8): this.setState({ doublesRank: ranks.gold_2, doublesRankString: "Gold II" }); break;
            case (9): this.setState({ doublesRank: ranks.gold_3, doublesRankString: "Gold III" }); break;
            case (10): this.setState({ doublesRank: ranks.plat_1, doublesRankString: "Platinum I" }); break;
            case (11): this.setState({ doublesRank: ranks.plat_2, doublesRankString: "Platinum II" }); break;
            case (12): this.setState({ doublesRank: ranks.plat_3, doublesRankString: "Platinum III" }); break;
            case (13): this.setState({ doublesRank: ranks.diamond_1, doublesRankString: "Diamond I" }); break;
            case (14): this.setState({ doublesRank: ranks.diamond_2, doublesRankString: "Diamond II" }); break;
            case (15): this.setState({ doublesRank: ranks.diamond_3, doublesRankString: "Diamond III" }); break;
            case (16): this.setState({ doublesRank: ranks.champ_1, doublesRankString: "Champion I" }); break;
            case (17): this.setState({ doublesRank: ranks.champ_2, doublesRankString: "Champion II" }); break;
            case (18): this.setState({ doublesRank: ranks.champ_3, doublesRankString: "Champion III" }); break;
            case (19): this.setState({ doublesRank: ranks.gc, doublesRankString: "Grand Champion" }); break;
            default: this.setState({ doublesRank: ranks.unranked, doublesRankString: "Unranked" });
        }
    }

    handleSSTier () {
        switch (this.props.ssRank) {
            case (0): this.setState({ ssRank: ranks.unranked, ssRankString: "Unranked" }); break;
            case (1): this.setState({ ssRank: ranks.bronze_1, ssRankString: "Bronze I" }); break;
            case (2): this.setState({ ssRank: ranks.bronze_2, ssRankString: "Bronze II" }); break;
            case (3): this.setState({ ssRank: ranks.bronze_3, ssRankString: "Bronze III" }); break;
            case (4): this.setState({ ssRank: ranks.silver_1, ssRankString: "Silver I" }); break;
            case (5): this.setState({ ssRank: ranks.silver_2, ssRankString: "Silver II" }); break;
            case (6): this.setState({ ssRank: ranks.silver_3, ssRankString: "Silver III" }); break;
            case (7): this.setState({ ssRank: ranks.gold_1, ssRankString: "Gold I" }); break;
            case (8): this.setState({ ssRank: ranks.gold_2, ssRankString: "Gold II" }); break;
            case (9): this.setState({ ssRank: ranks.gold_3, ssRankString: "Gold III" }); break;
            case (10): this.setState({ ssRank: ranks.plat_1, ssRankString: "Platinum I" }); break;
            case (11): this.setState({ ssRank: ranks.plat_2, ssRankString: "Platinum II" }); break;
            case (12): this.setState({ ssRank: ranks.plat_3, ssRankString: "Platinum III" }); break;
            case (13): this.setState({ ssRank: ranks.diamond_1, ssRankString: "Diamond I" }); break;
            case (14): this.setState({ ssRank: ranks.diamond_2, ssRankString: "Diamond II" }); break;
            case (15): this.setState({ ssRank: ranks.diamond_3, ssRankString: "Diamond III" }); break;
            case (16): this.setState({ ssRank: ranks.champ_1, ssRankString: "Champion I" }); break;
            case (17): this.setState({ ssRank: ranks.champ_2, ssRankString: "Champion II" }); break;
            case (18): this.setState({ ssRank: ranks.champ_3, ssRankString: "Champion III" }); break;
            case (19): this.setState({ ssRank: ranks.gc, ssRankString: "Grand Champion" }); break;
            default: this.setState({ ssRank: ranks.unranked, ssRankString: "Unranked" });
        }
    }

    handleStandardTier () {
        switch (this.props.standardRank) {
            case (0): this.setState({ standardRank: ranks.unranked, standardRankString: "Unranked" }); break;
            case (1): this.setState({ standardRank: ranks.bronze_1, standardRankString: "Bronze I" }); break;
            case (2): this.setState({ standardRank: ranks.bronze_2, standardRankString: "Bronze II" }); break;
            case (3): this.setState({ standardRank: ranks.bronze_3, standardRankString: "Bronze III" }); break;
            case (4): this.setState({ standardRank: ranks.silver_1, standardRankString: "Silver I" }); break;
            case (5): this.setState({ standardRank: ranks.silver_2, standardRankString: "Silver II" }); break;
            case (6): this.setState({ standardRank: ranks.silver_3, standardRankString: "Silver III" }); break;
            case (7): this.setState({ standardRank: ranks.gold_1, standardRankString: "Gold I" }); break;
            case (8): this.setState({ standardRank: ranks.gold_2, standardRankString: "Gold II" }); break;
            case (9): this.setState({ standardRank: ranks.gold_3, standardRankString: "Gold III" }); break;
            case (10): this.setState({ standardRank: ranks.plat_1, standardRankString: "Platinum I" }); break;
            case (11): this.setState({ standardRank: ranks.plat_2, standardRankString: "Platinum II" }); break;
            case (12): this.setState({ standardRank: ranks.plat_3, standardRankString: "Platinum III" }); break;
            case (13): this.setState({ standardRank: ranks.diamond_1, standardRankString: "Diamond I" }); break;
            case (14): this.setState({ standardRank: ranks.diamond_2, standardRankString: "Diamond II" }); break;
            case (15): this.setState({ standardRank: ranks.diamond_3, standardRankString: "Diamond III" }); break;
            case (16): this.setState({ standardRank: ranks.champ_1, standardRankString: "Champion I" }); break;
            case (17): this.setState({ standardRank: ranks.champ_2, standardRankString: "Champion II" }); break;
            case (18): this.setState({ standardRank: ranks.champ_3, standardRankString: "Champion III" }); break;
            case (19): this.setState({ standardRank: ranks.gc, standardRankString: "Grand Champion" }); break;
            default: this.setState({ standardRank: ranks.unranked, standardRankString: "Unranked" });
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
                            <p>Solo: <img src={this.state.soloRank} alt="rank" className="Rank-icon" title={this.state.soloRankString} /></p>
                            <p>Doubles: <img src={this.state.doublesRank} alt="rank" className="Rank-icon" title={this.state.doublesRankString} /></p>
                            <p>Standard: <img src={this.state.standardRank} alt="rank" className="Rank-icon" title={this.state.standardRankString} /></p>
                            <p>Solo Standard: <img src={this.state.ssRank} alt="rank" className="Rank-icon" title={this.state.ssRankString} /></p>
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
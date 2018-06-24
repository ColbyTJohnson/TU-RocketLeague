import React, { Component } from 'react';

import Playstyle from './Playstyle/Playstyle';
import './PlayerCard.css';

class playerCard extends Component {
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
                            <p>Solo: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                            <p>Doubles: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                            <p>Standard: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                            <p>Solo Standard: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                        </div>
                    </div>
                    <div className="Playstyle">
                        <h4>Playstyle</h4>
                        <hr/>
                        <Playstyle />
                    </div>
                </div>
            </div>
        );
    }
}

export default playerCard;
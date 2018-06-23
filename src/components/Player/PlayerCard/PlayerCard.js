import React, { Component } from 'react';

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
                    <h4>Ranks</h4>
                    <div className="Ranks">
                        <p>Solo: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                        <p>Doubles: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                        <p>Standard: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                        <p>Solo Standard: <img src={this.props.rank} alt="rank" className="Rank-icon" /></p>
                    </div>
                </div>
            </div>
        );
    }
};

export default playerCard;
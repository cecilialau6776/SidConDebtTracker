import React from 'react';
import "./styles.css";
import "./factions.css";

function Player({faction, name}) {

    return (
        <div className="player container">
            <div className={`faction-icon ${faction}`} />
            <span>{name}</span>
        </div>
    )
}

export default Player;

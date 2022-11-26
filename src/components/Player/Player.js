import React from 'react';

import Card from '../Card/Card';

import './style.css';

const Player = (props) => {
    return (
        <div className={`player ${props.playerPos}`}>
            {props.cards.map((item) => {
                return (
                    <Card key={item.key}
                        cardName={item.name}
                        playCard={props.playCard}
                        playerPos={props.playerPos}
                        waitingFor={props.waitingFor}
                        started={props.started}
                    />);
            })}
        </div>
    );
}

export default Player;
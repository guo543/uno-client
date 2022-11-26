import React from 'react';
import socket from '../../socket/socket';

import './style.css';

const Card = (props) => {
    const handleClick = () => {
        socket.emit("playCard", props.cardName);
    }

    return (
        <div className='card'>
            {
                props.playerPos === 'bottom' &&
                props.waitingFor &&
                props.started ? (
                    <img className='clickable' src={`./assets/${props.cardName}.png`} alt={props.cardName} onClick={handleClick} />
                ) : (
                    <img src={`./assets/card_back.png`} alt={props.cardName} />
                )
            }
            
        </div>
    );
}

export default Card;
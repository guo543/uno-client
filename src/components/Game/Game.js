import React from 'react';
import Player from '../Player/Player'

import { useState } from 'react';

import Pile from '../Pile/Pile';
import socket, { playerId } from '../../socket/socket';

import './style.css';

const Game = () => {
    const [started, setStarted] = useState(false);
    const [top, setTop] = useState('none');
    const [cards1, setCards1] = useState([]);
    const [cards2, setCards2] = useState([]);
    const [waitingFor, setWaitingFor] = useState('');

    const playCard = (cardName, player) => {
        console.log(cardName);
        setTop(cardName);
        if (player === 'top') {
            setCards1(cards1.filter(card => card.name !== cardName));
        } else {
            setCards2(cards2.filter(card => card.name !== cardName));
        }

        socket.emit("refresh", "refreshed...");
    }

    socket.on("gameState", (uno) => {
        console.log(JSON.stringify(uno));
        setStarted(uno.started);
        setTop(uno.top);
        setWaitingFor(uno.waitingFor);
        for (const player in uno.cards) {
            if (player === playerId) {
                setCards2(uno.cards[player] !== undefined ? uno.cards[player] : []);
            } else {
                setCards1(uno.cards[player] !== undefined ? uno.cards[player] : []);
            }
        }
    })

    return (
        <div className='game-container'>
            <Player
                playerPos='top'
                cards={cards1}
                playCard={playCard}
                waitingFor={playerId === waitingFor}
                started={started}
            />
            <Pile top={top} started={started} waitingFor={playerId === waitingFor ? 'bottom' : 'top'} />
            <Player
                playerPos='bottom'
                cards={cards2}
                playCard={playCard}
                waitingFor={playerId === waitingFor}
                started={started}
            />
        </div>
    );
}

export default Game;
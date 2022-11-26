import React from 'react';

import './style.css'

const Pile = (props) => {
    return (
        <div className='pile-container'>
            {
                props.started ? (
                    <>
                    <img className={`arrow ${props.waitingFor === 'bottom' ? 'down' : 'up'}`} src='./assets/arrow.png' alt='arrow'></img>
                    <div className='pile-top'>
                        {
                            props.top !== 'none' && (
                                <img src={`./assets/${props.top}.png`} alt={props.cardName} />
                            )
                        }
                    </div>
                    </>
                ) : (
                    <h1>waiting for the game to start</h1>
                )
            }
        </div>
    );
}

export default Pile;
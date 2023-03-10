import React from 'react';
import { useState, useEffect } from 'react';

function Timer() {
    let time = 15;
    const [minutes, setMinutes] = useState(time);
    const [seconds, setSeconds] = useState(0);
    let deadline = new Date(Date.now() + time * 60000);

    const getTime = () => {
        const time = deadline - Date.now();
        if (time < 0) return;
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <p>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</p>
        </div>
    );
};

const TimerSection = () => {
    function reset() { }
    function resolveDebts() { }
    function newDebt() { }
    return (
        <div>
            <Timer />
            <div className="container">
                <button onClick={reset}>Reset</button>
                <button onClick={resolveDebts}>Resolve Debts</button>
                <button onClick={newDebt}>New Debt</button>
            </div>
        </div >
    )
}

export default TimerSection;

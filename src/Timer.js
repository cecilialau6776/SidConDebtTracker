import React from 'react';
import { useState, useEffect } from 'react';

function Timer() {
    let time = 15;
    const [minutes, setMinutes] = useState(time);
    const [seconds, setSeconds] = useState(0);
    let deadline = new Date(Date.now() + time * 60000);
    // setMinutes(time);

    const getTime = () => {
        const time = deadline - Date.now();
        if (time < 0) return;
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    function reset() {
        setMinutes(time);
        setSeconds(0);
        deadline = new Date(Date.now() + time * 60000);
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
    function resolveDebts() { }
    function newDebt() { }
    return (
        <div>
            <Timer style={{ height: 60 }} />
            <div className="container" style={{ height: 40 }}>
                <button onClick={Timer.reset}>Reset</button>
                <button onClick={resolveDebts}>Resolve Debts</button>
                <button onClick={newDebt}>New Debt</button>
            </div>
        </div >
    )
}

export default TimerSection;
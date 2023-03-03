import React from 'react';
import "./styles.css";

import white from './assets/images/white.png';
import brown from './assets/images/brown.png';
import green from './assets/images/green.png';
import blue from './assets/images/blue.png';
import yellow from './assets/images/yellow.png';
import black from './assets/images/black.png';
import victory_point from './assets/images/victory_point.png';
import ship from './assets/images/ship.png';
import small_any from './assets/images/small_any.png';
import large_any from './assets/images/large_any.png';
import small_grey from './assets/images/small_grey.png';
import large_grey from './assets/images/large_grey.png';

function Resource({resource, count}) {
    let r;
    let classname;
    let c;

    if (resource === "white") {
        r = white;
        classname = "small-cube";
    } else if (resource === "brown") {
        r = brown;
        classname = "small-cube";
    } else if (resource === "green") {
        r = green;
        classname = "small-cube";
    } else if (resource === "victory_point") {
        r = victory_point;
        classname = "small-cube";
    } else if (resource === "ship") {
        r = ship;
        classname = "small-cube";
    } else if (resource === "blue") {
        r = blue;
        classname = "large-cube";
    } else if (resource === "yellow") {
        r = yellow;
        classname = "large-cube";
    } else if (resource === "black") {
        r = black;
        classname = "large-cube";
    } else if (resource === "small_any") {
        r = small_any;
        classname = "small-cube";
    } else if (resource === "small_grey") {
        r = small_grey;
        classname = "small-cube";
    } else if (resource === "large_any") {
        r = large_any;
        classname = "large-cube";
    } else if (resource === "large_grey") {
        r = large_grey;
        classname = "large-cube";
    }

    if (count === "0") {
        classname += " no-cubes";
    } else if (count > 1) {
        c = count;
    }

    return (
        <div className="container">
            <div className={`resource ${classname}`}>
                <img className={`centered ${classname}`} src={r} alt={count + ' ' + resource + ' cube(s)'}/>
                <span className="centered">{c}</span>
            </div>
        </div>
    )
}

export default Resource;

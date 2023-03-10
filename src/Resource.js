import React from "react";
import "./styles.css";

import white from "./assets/images/resources/white.png";
import brown from "./assets/images/resources/brown.png";
import green from "./assets/images/resources/green.png";
import blue from "./assets/images/resources/blue.png";
import yellow from "./assets/images/resources/yellow.png";
import black from "./assets/images/resources/black.png";
import victory_point from "./assets/images/resources/victory_point.png";
import ship from "./assets/images/resources/ship.png";
import small_any from "./assets/images/resources/small_any.png";
import large_any from "./assets/images/resources/large_any.png";
import small_grey from "./assets/images/resources/small_grey.png";
import large_grey from "./assets/images/resources/large_grey.png";

const resource_dict = {
  white: { color: white, type: "small-cube" },
  brown: { color: brown, type: "small-cube" },
  green: { color: green, type: "small-cube" },
  victory_point: { color: victory_point, type: "small-cube" },
  ship: { color: ship, type: "small-cube" },
  blue: { color: blue, type: "large-cube" },
  yellow: { color: yellow, type: "large-cube" },
  black: { color: black, type: "large-cube" },
  small_any: { color: small_any, type: "small-cube" },
  small_grey: { color: small_grey, type: "small-cube" },
  large_any: { color: large_any, type: "large-cube" },
  large_grey: { color: large_grey, type: "large-cube" },
};

function Resource({ resource, count }) {
  const color = resource_dict[resource].color;
  const type = resource_dict[resource].type + (count === 0 ? " no-cubes" : "");
  const resourceCount = count > 1 ? count : null;

  return (
    <div className="container">
      <div className={`resource ${type}`}>
        <img
          className={`centered ${type}`}
          src={color}
          alt={count + " " + resource + " cube(s)"}
        />
        <span className="centered">{resourceCount}</span>
      </div>
    </div>
  );
}

export default Resource;

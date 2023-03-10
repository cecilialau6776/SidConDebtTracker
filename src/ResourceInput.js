import React from "react";
import { useState } from "react";
import "./styles.css";

import half_arrow_left from "./assets/images/half_arrow_left.png";
import half_arrow_right from "./assets/images/half_arrow_right.png";

import Resource from "./Resource";

function ResourceInput({ resource, count, update_resource }) {
  return (
    <div className="container">
      <img
        className="centered half-arrow"
        src={half_arrow_left}
        alt={`increment ${resource}`}
        onClick={() => update_resource(resource, -1)}
      />
      <Resource resource={resource} count={count} />
      <img
        className="centered half-arrow"
        src={half_arrow_right}
        alt={`increment ${resource}`}
        onClick={() => update_resource(resource, 1)}
      />
    </div>
  );
}

export default ResourceInput;

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TimerSection from "./Timer";
import Resource from "./Resource";
import Player from "./Player";
import Debt from "./Debt";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TimerSection />
    <Debt
      from_faction="imdril"
      to_faction="kjas"
      white="3"
      green="2"
      large_any="4"
      large_grey="2"
    />
    <Debt
      from_faction="zeth"
      to_faction="faderan"
      white="3"
      green="2"
      large_any="4"
      large_grey="2"
    />
    <div className="container invis">
      <Player faction="zeth" />
      <Resource resource="white" count="2" />
      <Resource resource="brown" count="30" />
      <Resource resource="green" count="13" />
      <Resource resource="black" count="1" />
      <Resource resource="blue" count="5" />
      <Resource resource="yellow" count="0" />
      <Resource resource="victory_point" count="0" />
      <Resource resource="ship" count="0" />
      <Resource resource="small_any" count="1" />
      <Resource resource="large_any" count="2" />
      <Resource resource="small_grey" count="3" />
      <Resource resource="large_grey" count="4" />
    </div>
  </StrictMode>
);

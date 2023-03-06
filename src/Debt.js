import React from "react";
import { useContext } from "react";
import "./styles.css";

import Resource from "./Resource";
import Player from "./Player";
import { PlayerInfo } from "./PlayerInfo";

import arrow from "./assets/images/arrow.png";

function Debt({
  from_faction,
  to_faction,
  white = 0,
  brown = 0,
  green = 0,
  blue = 0,
  yellow = 0,
  black = 0,
  victory_point = 0,
  ship = 0,
  small_any = 0,
  large_any = 0,
  small_grey = 0,
  large_grey = 0,
  value = 0,
  custom = null,
}) {
  const unity_in_game = useContext(PlayerInfo)["unity_in_game"];

  const white_content =
    white > 0 ? <Resource resource="white" count={white} /> : null;
  const brown_content =
    brown > 0 ? <Resource resource="brown" count={brown} /> : null;
  const green_content =
    green > 0 ? <Resource resource="green" count={green} /> : null;
  const blue_content =
    blue > 0 ? <Resource resource="blue" count={blue} /> : null;
  const yellow_content =
    yellow > 0 ? <Resource resource="yellow" count={yellow} /> : null;
  const black_content =
    black > 0 ? <Resource resource="black" count={black} /> : null;
  const victory_point_content =
    victory_point > 0 ? (
      <Resource resource="victory_point" count={victory_point} />
    ) : null;
  const ship_content =
    ship > 0 ? <Resource resource="ship" count={ship} /> : null;
  const small_any_content =
    small_any > 0 ? <Resource resource="small_any" count={small_any} /> : null;
  const large_any_content =
    large_any > 0 ? <Resource resource="large_any" count={large_any} /> : null;
  const small_grey_content =
    small_grey > 0 ? (
      <Resource resource="small_grey" count={small_grey} />
    ) : null;
  const large_grey_content =
    large_grey > 0 ? (
      <Resource resource="large_grey" count={large_grey} />
    ) : null;
  const value_content =
    value > 0 ? <Resource resource="value" count={value} /> : null;

  return (
    <div className={`debt`}>
      <Player faction={from_faction} />
      {white_content}
      {brown_content}
      {green_content}
      {blue_content}
      {yellow_content}
      {black_content}
      {victory_point_content}
      {ship_content}
      {small_any_content}
      {large_any_content}
      {small_grey_content}
      {large_grey_content}
      {value_content}
      <div className="container">
        <img className={`centered arrow`} src={arrow} alt={`owes arrow`} />
      </div>
      <Player faction={to_faction} />
    </div>
  );
}

export default Debt;

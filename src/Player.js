import React from "react";
import { useContext } from "react";
import "./styles.css";
import "./factions.css";

import caylion from "./assets/images/icons/caylion.png";
import eni_et from "./assets/images/icons/eni_et.png";
import faderan from "./assets/images/icons/faderan.png";
import imdril from "./assets/images/icons/imdril.png";
import kit from "./assets/images/icons/kit.png";
import kjas from "./assets/images/icons/kjas.png";
import unity from "./assets/images/icons/unity.png";
import yengii from "./assets/images/icons/yengii.png";
import zeth from "./assets/images/icons/zeth.png";

import { PlayerInfo } from "./PlayerInfo.js";

const faction_dict = {
  caylion: caylion,
  eni_et: eni_et,
  faderan: faderan,
  imdril: imdril,
  kit: kit,
  kjas: kjas,
  unity: unity,
  yengii: yengii,
  zeth: zeth,
};

function Player({ faction, className }) {
  const name = useContext(PlayerInfo)[faction];
  const icon = faction_dict[faction];

  return (
    <div className={`player container ${className}`}>
      <img
        className={`faction-icon ${faction}`}
        src={icon}
        alt={`${faction} icon`}
      />
      <span>{name}</span>
    </div>
  );
}

export default Player;

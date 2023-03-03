import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TimerSection from "./Timer";
import Resource from "./Resource";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <TimerSection />
        <div className="container">
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

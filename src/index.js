import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TimerSection from "./Timer";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TimerSection />
  </StrictMode>
);
import React, { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import DebtTracker from "./DebtTracker";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <DebtTracker />
  </StrictMode>
);

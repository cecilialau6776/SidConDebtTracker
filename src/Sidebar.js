import React from "react";
import { useContext, useState } from "react";
import "./styles.css";

import ResourceInput from "./ResourceInput";
import Player from "./Player";

import arrow from "./assets/images/arrow.png";

function Sidebar({ current_turn, view, close_sidebar, add_debt }) {
  const [turns, setTurns] = useState(1);
  const [debt, setDebt] = useState({
    white: 0,
    brown: 0,
    green: 0,
    blue: 0,
    yellow: 0,
    black: 0,
    victory_point: 0,
    ship: 0,
    small_any: 0,
    large_any: 0,
    small_grey: 0,
    large_grey: 0,
    custom: "",
  });

  function handle_submit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setDebt({
      ...debt,
      debt_type: formJson.debt_type,
      custom: formJson.custom,
    });
    console.log(formJson);
    console.log(debt);
  }

  function update_resource(resource, count) {
    const total = debt[resource] + count;
    if (total >= 0) {
      setDebt({
        ...debt,
        [resource]: debt[resource] + count,
      });
    }
  }

  return (
    <div>
      {view === "new_debt" ? (
        <div className="sidebar">
          <span className="close-sidebar" onClick={close_sidebar}>
            X
          </span>
          <form className="debt_form" onSubmit={handle_submit}>
            <div className="debt_form">
              <div className="radio">
                <input
                  type="radio"
                  id="end_of_game"
                  name="debt_type"
                  value="end_of_game"
                />
                <label htmlFor="end_of_game">End of Game</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="recurring"
                  name="debt_type"
                  value="recurring"
                />
                <label htmlFor="recurring">Recurring</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="in_x_turns"
                  name="debt_type"
                  value="in_x_turns"
                  checked
                />
                <label htmlFor="in_x_turns">
                  In&nbsp;
                  <input
                    style={{
                      border: "none",
                      width: "1.8em",
                      fontFamily: "inherit",
                      fontSize: "1em",
                      padding: 0,
                    }}
                    name="in_x_turns"
                    type="number"
                    value={turns}
                    min={1}
                    max={6 - current_turn}
                    onChange={(e) => setTurns(e.target.value)}
                  />
                  &nbsp;{turns === 1 ? `turn` : `turns`}
                </label>
              </div>
              <div className="resource_grid">
                <ResourceInput
                  resource="white"
                  update_resource={update_resource}
                  count={debt.white}
                />
                <ResourceInput
                  resource="blue"
                  update_resource={update_resource}
                  count={debt.blue}
                />
                <ResourceInput
                  resource="brown"
                  update_resource={update_resource}
                  count={debt.brown}
                />
                <ResourceInput
                  resource="yellow"
                  update_resource={update_resource}
                  count={debt.yellow}
                />
                <ResourceInput
                  resource="green"
                  update_resource={update_resource}
                  count={debt.green}
                />
                <ResourceInput
                  resource="black"
                  update_resource={update_resource}
                  count={debt.black}
                />
                <ResourceInput
                  resource="small_any"
                  update_resource={update_resource}
                  count={debt.small_any}
                />
                <ResourceInput
                  resource="large_any"
                  update_resource={update_resource}
                  count={debt.large_any}
                />
                <ResourceInput
                  resource="small_grey"
                  update_resource={update_resource}
                  count={debt.small_grey}
                />
                <ResourceInput
                  resource="large_grey"
                  update_resource={update_resource}
                  count={debt.large_grey}
                />
                <ResourceInput
                  resource="ship"
                  update_resource={update_resource}
                  count={debt.ship}
                />
                <ResourceInput
                  resource="victory_point"
                  update_resource={update_resource}
                  count={debt.victory_point}
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Custom"
              name="custom"
              style={{ marginBottom: ".5em" }}
            />
            <button type="submit">Create Debt</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Sidebar;

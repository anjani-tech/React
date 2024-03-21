import React, { useState } from "react";

const Player = ({ name: initialName, symbol, isActive, setPlayersName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const btnText = {
    true: "Save",
    false: "Edit",
  };

  function clickHandler() {
    setIsEditing((isEditing) => !isEditing);
    if(isEditing) {
      setPlayersName(symbol, playerName);
    }
  }

  function changeHandler(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing && (
          <input
            onChange={changeHandler}
            type="text"
            value={playerName}
            required
          />
        )}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler} setPlayersName={setPlayersName}>{btnText[isEditing]}</button>
    </li>
  );
};

export default Player;

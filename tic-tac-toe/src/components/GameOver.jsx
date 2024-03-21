import React from "react";

const GameOver = ({ winner, players, onRestartGame }) => {
  function handleRestart() {
    onRestartGame();
  }

  return (
    <div id="game-over">
      <h2>Game Over!!</h2>
      {winner && <p>{players[winner]} has won</p>}
      {!winner && <p> No One Win</p>}
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default GameOver;

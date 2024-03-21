import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./constants/winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getActivePlayer(turns) {
  let playerSymbol = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    playerSymbol = "O";
  }
  return playerSymbol;
}

function getWinner(gameBoard) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  return winner;
}

function deriveGameBoard(turns) {
  const gameBoard = [...initialGameBoard.map((a) => [...a])];
  for (const turn of turns) {
    const {
      square: { row, col },
      player,
    } = turn;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const [turns, setTurns] = useState([]);
  
  const activePlayer = getActivePlayer(turns);
  const gameBoard = deriveGameBoard(turns);
  const winner = getWinner(gameBoard);
  const hasDrawan = turns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setTurns((intialTurns) => {
      const playerSymbol = getActivePlayer(intialTurns);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: playerSymbol },
        ...intialTurns,
      ];
      return updatedTurn;
    });
  }

  function onRestartGame() {
    setTurns([]);
  }

  function setPlayersName(symbol, playerName) {
    setPlayers((intialPlayerNames) => {
      const updatedPlayerNames = { ...intialPlayerNames, [symbol]: playerName };
      return updatedPlayerNames;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            setPlayersName={setPlayersName}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            setPlayersName={setPlayersName}
          />
        </ol>
        {(winner || hasDrawan) && (
          <GameOver
            winner={winner}
            players={players}
            onRestartGame={onRestartGame}
          />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={turns} />
    </main>
  );
}

export default App;

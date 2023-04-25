import React, { useState, useEffect } from "react";
import "./style.css";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  function renderSquare(i) {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });

  function handleClick(i) {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      let newScore = { ...score };
      newScore[winner]++;
      setScore(newScore);
    }
  }, [squares]);

  const winner = calculateWinner(squares);
  if (winner) {
    let winnerText = "Winner: " + winner;
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={() => {}} />
        </div>
        <div className="game-info">
          <div>{winnerText}</div>
          <div>X Score: {score.X}</div>
          <div>O Score: {score.O}</div>
          <button onClick={resetGame}>Play Again</button>
        </div>
      </div>
    );
  } else if (squares.every((square) => square != null)) {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={() => {}} />
        </div>
        <div className="game-info">
          <div>Draw</div>
          <div>X Score: {score.X}</div>
          <div>O Score: {score.O}</div>
          <button onClick={resetGame}>Play Again</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={handleClick} />
        </div>
        <div className="game-info">
          <div>Next player: {xIsNext ? "X" : "O"}</div>
          <div>X Score: {score.X}</div>
          <div>O Score: {score.O}</div>
          <button onClick={resetGame}>Reset Game</button>
        </div>
      </div>
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
}

export default TicTacToe;

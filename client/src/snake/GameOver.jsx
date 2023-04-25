import React from "react";

function GameOverModal({ onPlayAgain, score }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Game Over!</h2>
        <h3>You Scored {score}</h3>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOverModal;

import React, { useState, useEffect } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
const INITIAL_DIRECTION = "right";

const foodImages = [
  "🍎",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🫐",
  "🥥",
  "🥝",
  "🍍",
  "🥭",
  "🍑",
  "🍒",
  "🥦",
  "🥬",
];

function generateFoodPosition() {
  const x = Math.floor(Math.random() * GRID_SIZE);
  const y = Math.floor(Math.random() * GRID_SIZE);
  const index = Math.floor(Math.random() * foodImages.length);
  return { x, y, image: foodImages[index] };
}

function Snake() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFoodPosition());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSnake();
    }, 100);
    return () => clearInterval(intervalId);
  }, [snake, direction, food]);

  function moveSnake() {
    const head = { x: snake[0].x, y: snake[0].y };
    switch (direction) {
      case "up":
        head.y--;
        break;
      case "down":
        head.y++;
        break;
      case "left":
        head.x--;
        break;
      case "right":
        head.x++;
        break;
    }
    if (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      snake.slice(1).some((part) => part.x === head.x && part.y === head.y)
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake.slice(0, -1)];
    setSnake(newSnake);

    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood(generateFoodPosition());
      setSnake([...newSnake, snake[snake.length - 1]]);
    }
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.key) {
      case "ArrowUp":
        if (direction !== "down") setDirection("up");
        break;
      case "ArrowDown":
        if (direction !== "up") setDirection("down");
        break;
      case "ArrowLeft":
        if (direction !== "right") setDirection("left");
        break;
      case "ArrowRight":
        if (direction !== "left") setDirection("right");
        break;
      default:
        break;
    }
  }

  // useEffect(() => {
  //   document.addEventListener("keydown", handleKeyDown);
  //   return () => document.removeEventListener("keydown", handleKeyDown);
  // }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>Snake Game</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, 20px)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, 20px)`,
          gap: "1px",
          border: "solid 1px black",
          backgroundColor: "#e6e6e6",
          padding: "10px",
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {snake.map((part, i) => (
          <div
            key={i}
            style={{
              gridColumn: part.x + 1,
              gridRow: part.y + 1,
              backgroundColor: i === 0 ? "green" : "darkgreen",
              borderRadius: "50%",
              boxShadow: "inset 0px 0px 2px #000000",
            }}
          />
        ))}
        <div
          style={{
            gridColumn: food.x + 1,
            gridRow: food.y + 1,
            backgroundImage: `url('${food.image}')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "50%",
            boxShadow: "0px 0px 4px #000000",
          }}
        />
      </div>
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        Score: {score}
      </div>
      {gameOver ? (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          Game Over
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </div>
      ) : (
        <button
          style={{ marginTop: "20px" }}
          onClick={() => setDirection(INITIAL_DIRECTION)}
        >
          Start Game
        </button>
      )}
    </div>
  );
}

export default Snake;

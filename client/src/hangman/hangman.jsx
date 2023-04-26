import React, { useState } from "react";
import words from "./words";
import "./style.css";

const Hangman = () => {
  const [word, setWord] = useState("");
  const [displayedWord, setDisplayedWord] = useState("");
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  const chooseWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setWord(words[randomIndex]);
    setDisplayedWord("_".repeat(words[randomIndex].length));
  };

  const handleGuess = (event) => {
    const letter = event.target.value;
    if (word.includes(letter)) {
      const newDisplayedWord = displayedWord.split("");
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          newDisplayedWord[i] = letter;
        }
      }
      setDisplayedWord(newDisplayedWord.join(""));
      if (!newDisplayedWord.includes("_")) {
        setGameOver(true);
      }
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
      if (incorrectGuesses.length + 1 === 6) {
        setGameOver(true);
      }
    }
  };

  const playAgain = () => {
    setWord("");
    setDisplayedWord("");
    setIncorrectGuesses([]);
    setGameOver(false);
    chooseWord();
  };

  if (!word) {
    chooseWord();
  }

  return (
    <div className="Hangman">
      <h1>Hangman</h1>
      <div className="Hangman-word">
        {gameOver ? <div>{word}</div> : <div>{displayedWord}</div>}
      </div>
      <div className="Hangman-guesses">
        {incorrectGuesses.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      {!gameOver && (
        <div className="Hangman-input">
          {[..."abcdefghijklmnopqrstuvwxyz"].map((letter) => (
            <button
              key={letter}
              value={letter}
              onClick={handleGuess}
              disabled={incorrectGuesses.includes(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      )}
      {gameOver && (
        <div>
          <h2>{incorrectGuesses.length === 6 ? "Game Over" : "You Win!"}</h2>
          <button onClick={playAgain}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Hangman;

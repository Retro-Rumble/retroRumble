import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Snake from "./snake/snake";
import TicTacToe from "./tictactoe/tictactoe";
import Hangman from "./hangman/hangman";
import Sudoku from "./sudoku/sudoku";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/snake" element={<Snake />} />
				<Route path="/tictactoe" element={<TicTacToe />} />
				<Route path="/hangman" element={<Hangman />} />
				<Route path="/sudoku" element={<Sudoku />} />
			</Routes>
		</div>
	);
}

export default App;

import React, { useState, useEffect } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snake from "./snake/snake";
import "./App.css";
import NavBar from "./components/Navbar";
import TicTacToe from "./tictactoe/tictactoe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/snake" element={<Snake />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </div>
  );
}

export default App;

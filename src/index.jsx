import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { TicTacToe } from "./Pages/TicTacToe/Main.page";
import { Calculator } from "./Pages/Calculator/Calculator.page";
import { Blackjack } from "./Pages/BJ/Blackjack.jsx";
import "./css/style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/Tictactoe" element={<TicTacToe />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Blackjack" element={<Blackjack />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

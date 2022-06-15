import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { TicTacToe } from "./Pages/TicTacToe/Main.page";
import { Calculator } from "./Pages/Calculator/Calculator.page";
import { Blackjack } from "./Pages/BJ/Blackjack.jsx";
import { Restaurant } from "./Pages/Restaurant/Restaurant.jsx";
import "./css/style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Ofir-Shaya" element={<App />}>
        <Route path="/Ofir-Shaya/TicTacToe" element={<TicTacToe />} />
        <Route path="/Ofir-Shaya/Calculator" element={<Calculator />} />
        <Route path="/Ofir-Shaya/Blackjack" element={<Blackjack />} />
        <Route path="/Ofir-Shaya/Restaurant" element={<Restaurant />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

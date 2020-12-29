import React from "react";
import "./style.css";
import Container from "./component/container";

export default function App() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <a href="#">Incio</a>
          </li>
          <li>
            <a href="#">Mercado</a>
          </li>
          <li>
            <a href="#">Memes</a>
          </li>
          <li>
            <a href="#">Soporte</a>
          </li>
          <li>
            <a href="#">Alimento</a>
          </li>
        </ul>
      </nav>
      <Container />
    </div>
  );
}

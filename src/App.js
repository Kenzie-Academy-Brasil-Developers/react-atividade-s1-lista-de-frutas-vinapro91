import "./App.css";
import { useState } from "react";
import FruitList from "./components/FruitList/FruitList";
function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const fruitsName = fruits.map((item) => {
    return <li>{item.name}</li>;
  });

  function filterRedFruits() {
    const redFruits = fruits.filter((item) => item.color === "red");
    setFruits(redFruits);
  }

  const totalPrice = fruits.reduce((valorAnterior, valorAtual) => {
    return valorAtual.price + valorAnterior;
  }, 0);

  return (
    <div className="App">
      <div className="totalPrice">Preço Total: {totalPrice}</div>
      <FruitList fruit={fruitsName}></FruitList>
      <button onClick={filterRedFruits}>mostrar Frutas Vermelhas</button>
    </div>
  );
}

export default App;

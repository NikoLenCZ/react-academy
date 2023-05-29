import "./App.css";
import { Animal } from "./components/Animal";
import List from "./components/List";

function App() {
  const menuItems = ["Úvod", "O nás", "Služby", "Kontakt"];
  
  const animalOne = ["🦒 žirafa", "🐘 slon", "🦬 zubr", "🦏 nosorožec"];

  const animalTwo = ["🐈 kočka", "🐶 pes", "🐁 myš", "🦜 papoušek"];
  const animalThree = [];

  // const animal = [];

  return (
    <>
      <List menuItems={menuItems} nadpis="React Girls" />
      <div className="cards">
      <Animal animal={animalOne}>Animals</Animal>
      <Animal animal={animalTwo}>Animals</Animal>
      <Animal animal={animalThree}>Animals</Animal>
      </div>
    </>
  );
}

export default App;

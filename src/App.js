import "./App.css";
import { Animal } from "./components/Animal";
import List from "./components/List";

function App() {
  const menuItems = ["Úvod", "O nás", "Služby", "Kontakt"];
  
  const animal = ["🦒 žirafa", "🐘 slon", "🦬 zubr", "🦏 nosorožec"];

  // const animal = [];

  return (
    <>
      <List menuItems={menuItems} nadpis="React Girls" />
      <Animal animal={animal}>Animals</Animal>
    </>
  );
}

export default App;

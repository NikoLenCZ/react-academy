import "./App.css";
import React, { useState } from "react";
import { Animal } from "./components/Animal";
import List from "./components/List";
import { Users } from "./components/Users";
import { Posts } from "./components/Posts";
import ProductList from "./components/ProductList";

function App() {

  // const animalOne = ["🦒 žirafa", "🐘 slon", "🦬 zubr", "🦏 nosorožec"];
  // const animalTwo = ["🐈 kočka", "🐶 pes", "🐁 myš", "🦜 papoušek"];
  // const animalThree = [];

  const [menu, setMenu] = useState(["Úvod", "O nás", "Služby", "Kontakt"]);

  // const [menu2, setMenu2] = useState(["Úvod", "O nás", "Služby", "Kontakt"]);

  const handleDeleteMenu = () => {
    console.log("smazal jsi menu!");
    setMenu([])
  };

  const handleAddMenu = () => {
    console.log("vložil jsi menu ;-)");
    setMenu(["Úvod", "O nás", "Kontakt"])
  };

  // const handleDeleteMenu2 = () => {
  //   console.log("smazal jsi menu!");
  //   setMenu2([])
  // };

  // const handleAddMenu2 = () => {
  //   console.log("vložil jsi menu ;-)");
  //   setMenu2([ "Kontakt", "O nás", "Úvod"])
  // };

  return (
    <>
      <List
      menu={menu}
      handleAddMenu={handleAddMenu}
      handleDeleteMenu={handleDeleteMenu}
      nadpis="React Girls" />
      <div className="cards">
      <Animal>Animals</Animal>
      <Animal>Animals</Animal>
      <Animal>Animals</Animal>

      {/* <Animal animal={animalsOne}>Animals</Animal>
      <Animal animal={animalsTwo}>Animals</Animal>
      <Animal animal={animalsThree}>Animals</Animal> */}
      </div>

      {/* <List
      menu={menu2}
      handleAddMenu={handleAddMenu2}
      handleDeleteMenu={handleDeleteMenu2}
      nadpis="React Girls2" />
      <div className="cards">
      <Animal animals={animalOne}>Animals</Animal>
      <Animal animals={animalTwo}>Animals</Animal>
      <Animal animals={animalThree}>Animals</Animal>
      </div> */}

      <ProductList />
      <Users />
      <Posts />
    </>
  );
}

export default App;

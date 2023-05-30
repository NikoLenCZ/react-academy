import React from "react";
import { Button } from "./Button";

const List = ({menu, nadpis, handleAddMenu, handleDeleteMenu}) => {
  // const menuItems = props.menuItems;
  // const nadpis = props.nadpis;

  // destructuring
  // const { menu, nadpis, handleAddMenu, handleDeleteMenu } = props;

  // const menuItems = [];

  // if (menuItems.length === 0) {
  //   return <p>menu je prázdné!</p>;
  // }

  // const handleDeleteMenu = () => {
  //   console.log("smazal jsi menu!");
  //   setMenu([])
  // };

  // const handleAddMenu = () => {
  //   console.log("vložil jsi menu ;-)");
  //   setMenu(["Úvod", "O nás", "Kontakt"])
  // };

  return (
    <nav className="ap-navigation">
      <h1 className="ap-nav-logo">{nadpis}</h1>

      {menu.length === 0 ? (
        <p>Menu je prázdné</p>
      ) : (
        <ul className="ap-nav-list">
          {menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

<div className="ap-btn-box">
  <Button handleDeleteMenu={handleDeleteMenu} type="primary" size="lg" onClick={handleDeleteMenu}>smaž menu</Button>
  <Button handleAddMenu={handleAddMenu} type="secondary" size="sm" onClick={handleAddMenu}>přidej menu</Button>
</div>

    </nav>
  );
};

export default List;
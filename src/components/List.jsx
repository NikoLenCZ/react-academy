import React from "react";
import { Button } from "./Button";

const List = (props) => {
  // const menuItems = props.menuItems;
  // const nadpis = props.nadpis;

  // destructuring
  const { menuItems, nadpis } = props;

  // const menuItems = [];

  // if (menuItems.length === 0) {
  //   return <p>menu je prázdné!</p>;
  // }

  const handleDeleteMenu = () => {
    console.log("smazal jsi menu!");
  };

  const handleAddMenu = () => {
    console.log("vložil jsi menu ;-)");
  };

  return (
    <nav className="ap-navigation">
      <h1 className="ap-nav-logo">{nadpis}</h1>

      {menuItems.length === 0 ? (
        <p>menuItems je prázdné</p>
      ) : (
        <ul className="ap-nav-list">
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

<div className="ap-btn-box">
  <Button type="primary" size="lg" onClick={handleDeleteMenu}>smaž menu</Button>
  <Button type="secondary" size="sm" onClick={handleAddMenu}>přidej menu</Button>
</div>

    </nav>
  );
};

export default List;
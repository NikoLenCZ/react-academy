import React from "react";
import {ButtonType, ButtonSize} from './theme';

export const Button = ({ children, onClick, size, type }) => {
  
  // const handleClick = () => {
  //   console.log("kliknul jsi na mě!");
  // };
  // return <button onClick={handleClick}>klikni na mě</button>;

  const classNames = ButtonType[type] + " " + ButtonSize[size];

  return <button className={classNames} onClick={onClick}> {children}</button>;
};

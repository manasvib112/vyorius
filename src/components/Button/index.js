import React from "react";
import "./style.css";

const Button = ({
  name = "",
  size = "small",
  type = "solid",
  action = null,
}) => {
  return <button className={`button-component ${size} ${type}`}>{name}</button>;
};
export default Button;

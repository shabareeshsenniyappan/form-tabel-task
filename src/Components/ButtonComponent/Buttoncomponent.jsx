import React from "react";
import classes from "./ButtonComponent.module.css";

function Buttoncomponent({ name, onClick, type, clr, disable }) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`${clr === "dark" ? classes.butDark : classes.butBright}`}
        disabled={disable}
      >
        {name}
      </button>
    </div>
  );
}

export default Buttoncomponent;

import React from "react";
import classes from "./SelectOptionComponent.module.css";
function SelectOptionComponent({
  value,
  onChangeInput,
  name,
  optionValue,
  label,
}) {
  return (
    <div className={classes.inputContainer}>
      <label className={classes.labelInput}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChangeInput}
        className={classes.inputHero}
      >
        <option key={0} value={"Select Option"}>
          Select the Option
        </option>
        {optionValue?.map((state) => (
          <option key={state?.id} value={state?.name}>
            {state?.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectOptionComponent;

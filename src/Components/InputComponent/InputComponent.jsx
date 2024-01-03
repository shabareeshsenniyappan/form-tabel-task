import React, { useState } from "react";
import classes from "./InputComponent.module.css";

function InputComponent(props) {
  const {
    type,
    label,
    name,
    value,
    onChangeData,
    maxLength,
    minLength,
    errorValidator,
    errorMsg,
    required,
  } = props;
  const [isError, setisError] = useState(false);

  const onChangeHandle = (e) => {
    if (!errorValidator?.(e?.target?.value)) setisError(true);
    else setisError(false);
    onChangeData(e);
  };

  return (
    <div className={classes.inputContainer}>
      <label className={classes.labelInput}>{label}</label>
      <input
        className={classes.inputHero}
        type={type}
        value={value}
        onChange={onChangeHandle}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />
      {isError && <div className={classes.errorLabel}>{errorMsg}</div>}
    </div>
  );
}

export default InputComponent;

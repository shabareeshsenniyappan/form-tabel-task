import { useDispatch } from "react-redux";
import Buttoncomponent from "../../Components/ButtonComponent/Buttoncomponent";
import InputComponent from "../../Components/InputComponent/InputComponent";
import SelectOptionComponent from "../../Components/SelectComponent/SelectOptionComponent";
import { stateCity } from "../../Services/stateCity";
import {
  valiURL,
  validateEmail,
  validateUserName,
} from "../../Services/validationFunctions";
import classes from "./AddUser.module.css";
import React, { useEffect, useState } from "react";
import { addUser, editUser } from "../../feature/user";

function AddUser({ userDetail, closeModal }) {
  //     Form Details:
  // Name - Mandatory, String, Min and Max characters.
  // email - Mandatory and email validations
  // Linkedin URL - Mandatory and URL validations
  // Gender - Mandatory
  // Address - Sub form
  // - Line 1 - Text box
  // - Line 2 - Text box
  // - State - Drop down
  // - City - Drop down (values will be generated based on State)
  // - PIN - Text box & validations
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    linkedInURL: "",
    gender: "",
    line1: "",
    line2: "",
    state: "",
    city: "",
    pin: "",
  });

  const [isEdit, setisEdit] = useState(false);
  useEffect(() => {
    if (userDetail) {
      if (Object.keys(userDetail).length === 0) setisEdit(false);
      else {
        setisEdit(true);
        setUserData({ ...userData, ...userDetail });
      }
    }
  }, [userDetail]);

  const dispatch = useDispatch();

  const [cityOption, setcityOption] = useState([]);

  const onChangeInput = (data) => {
    setUserData({ ...userData, [data.target.name]: data?.target?.value });
    if (data.target.name === "state") {
      setcityOption(
        stateCity?.filter((e) => e.name === data?.target?.value)[0]?.city
      );
    }
  };

  const onUserFormDataSubmit = (e) => {
    e.preventDefault();
    if (isEdit) dispatch(editUser(userData));
    else dispatch(addUser(userData));
    closeModal();
  };

  const resetForm = () => {
    setUserData({
      name: "",
      email: "",
      linkedInURL: "",
      gender: "",
      line1: "",
      line2: "",
      state: "",
      city: "",
      pin: "",
    });
    closeModal();
  };

  const closeModalClick = () => {
    setisEdit(false);
    closeModal();
  };
  const checkButtonDisabled = () => {
    return (
      userData?.name === "" ||
      userData?.email === "" ||
      userData?.gender === "" ||
      userData?.linkedInURL === ""
    );
  };
  // console.log(userDetail, isEdit, "userData");
  return (
    <div>
      <div className={classes.headerAddClose} onClick={closeModalClick}>
        X
      </div>
      <div className={classes.headerAdd}>Add New User</div>

      <form
        onSubmit={onUserFormDataSubmit}
        onReset={resetForm}
        className={classes.formContainer}
      >
        <InputComponent
          type={"text"}
          required={true}
          label={"Name*"}
          name={"name"}
          value={userData?.name}
          onChangeData={onChangeInput}
          minLength={2}
          maxLength={19}
          errorValidator={validateUserName}
          errorMsg={"Enter a Valid Name"}
        />
        <InputComponent
          type={"email"}
          required={true}
          label={"Email*"}
          name={"email"}
          value={userData?.email}
          onChangeData={onChangeInput}
          errorValidator={validateEmail}
          errorMsg={"Enter a Valid Email address"}
        />
        <InputComponent
          type={"url"}
          label={"LinkedIn URL*"}
          name={"linkedInURL"}
          required={true}
          value={userData?.linkedInURL}
          onChangeData={onChangeInput}
          errorValidator={valiURL}
          errorMsg={"Enter a Valid linkedIn URL"}
        />

        <div className={classes.inputHeroContainer}>
          <label className={classes.labelCont}>Select Gender*</label>
          <div className={classes.radioButtonContainer}>
            <input
              type="radio"
              value={"Male"}
              name="gender"
              checked={userData?.gender === "Male"}
              onChange={onChangeInput}
              required
            />
            Male
            <input
              type="radio"
              value={"Female"}
              name="gender"
              checked={userData?.gender === "Female"}
              onChange={onChangeInput}
            />
            Female
          </div>
        </div>
        <div className={classes.addressCont}>
          <label className={classes.labelCont}>Address</label>
        </div>
        <InputComponent
          type={"text"}
          label={"Line 1"}
          name={"line1"}
          value={userData?.line1}
          onChangeData={onChangeInput}
        />
        <InputComponent
          type={"text"}
          label={"Line 2"}
          name={"line2"}
          value={userData?.line2}
          onChangeData={onChangeInput}
        />

        <SelectOptionComponent
          name={"state"}
          label={"State"}
          onChangeInput={onChangeInput}
          optionValue={stateCity}
          value={userData?.state}
        />
        <SelectOptionComponent
          name={"city"}
          label={"City"}
          onChangeInput={onChangeInput}
          optionValue={cityOption}
          value={userData?.city}
        />

        <InputComponent
          type={"text"}
          label={"Pincode"}
          name={"pin"}
          value={userData?.pin}
          onChangeData={onChangeInput}
        />
        <div className={classes.buttonCont}>
          <Buttoncomponent
            type={"submit"}
            name={"Submit"}
            clr={"dark"}
            disable={() => checkButtonDisabled()}
          />
          <Buttoncomponent
            type={"reset"}
            name={"Reset"}
            clr={"light"}
            disable={false}
          />
        </div>
      </form>
    </div>
  );
}

export default AddUser;

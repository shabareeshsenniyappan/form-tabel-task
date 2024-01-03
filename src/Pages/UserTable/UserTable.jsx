import React, { useState } from "react";
import { useSelector } from "react-redux";
import Buttoncomponent from "../../Components/ButtonComponent/Buttoncomponent";
import classes from "./UserTable.module.css";
import Modal from "react-modal";
import AddUser from "../AddUser/AddUser";
import { isUserEditable } from "../../Services/config";

function UserTable() {
  let user = useSelector((state) => state?.user?.user);
  const [openUserForm, setOpenUserForm] = useState(false);
  const [selectedUser, setselectedUser] = useState();
  const openAddModel = () => {
    setOpenUserForm(true);
  };
  const closeAddModel = () => {
    setOpenUserForm(false);
    setselectedUser();
  };
  const onSelectEdit = (index) => {
    setselectedUser(user[index]);
    openAddModel();
  };
  return (
    <div className={classes.useTablePageHeroContainer}>
      <div className={classes.header}>
        <div>Technospurs</div>
        <div className={classes.headFont}>USER TABLE</div>

        <Buttoncomponent
          onClick={openAddModel}
          clr={"dark"}
          name={"Add User"}
        />
      </div>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Linkedin URL</th>
          <th> Gender</th>
          <th> Address</th>
          <th> Edit</th>
        </tr>
        {user?.map((e, index) => (
          <tr key={e?.id}>
            <td>{e?.name}</td>
            <td>{e?.email}</td>
            <td>{e?.linkedInURL}</td>
            <td>{e?.gender}</td>
            <td>
              <div>{e?.line1}</div>
              <div>{e?.line2}</div>
              <div>{e?.state}</div>
              <div>{e?.city}</div>
              <div>{e?.pin}</div>
            </td>
            <td>
              <Buttoncomponent
                onClick={() => {
                  onSelectEdit(index);
                }}
                clr={"dark"}
                name={"Edit"}
                disable={isUserEditable}
              />
            </td>
          </tr>
        ))}
      </table>
      <Modal
        isOpen={openUserForm}
        onRequestClose={closeAddModel}
        onCloseModal={closeAddModel}
      >
        <AddUser userDetail={selectedUser} closeModal={closeAddModel} />
      </Modal>
    </div>
  );
}

export default UserTable;

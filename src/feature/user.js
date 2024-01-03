import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 1,
      name: "Shabareesh",
      email: "shabareeshshabareez@gmail.com",
      linkedInURL: "",
      gender: "Male",
      line1: "sdg",
      line2: "",
      state: "",
      city: "",
      pin: "aDa",
    },
    {
      id: 2,
      name: "Shabareeshgdgfd",
      email: "shabareeshshabareez@gmail.com",
      linkedInURL: "https://redux-toolkit.js.org/tutorials/quick-start",
      gender: "Male",
      line1: "sdg",
      line2: "dfgdf",
      state: "Tamil Nadu",
      city: "Coimbatore",
      pin: "aDa",
    },
  ],
};

export const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push({ ...action.payload, id: state.user.length + 1 });
    },
    editUser: (state, action) => {
      state.user[action.payload.id - 1] = { ...action.payload };
    },
  },
});

export const { addUser, editUser } = userSlice.actions;

export default userSlice.reducer;

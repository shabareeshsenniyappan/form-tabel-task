import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [
    {
      id: 1,
      name: "Shabareesh",
      email: "shabareeshshabareez@gmail.com",
      linkedInURL: "https://www.linkedin.com/",
      gender: "Male",
      line1: "sasmy street",
      line2: "cbe",
      state: "Tamil Nadu",
      city: "Coimbatore",
      pin: "641004",
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

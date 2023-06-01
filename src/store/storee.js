import { createSlice } from "@reduxjs/toolkit";


const storee = createSlice({
  name: "authentication",
  initialState: {
    valuee:[]
  },
  reducers: {
    addTransaction: (state, action) => {
      state.valuee = [...action.payload];
      },
   
  },
});

// console.log(localStorage.getItem("isLoggedIn"));
export const authActions = storee.actions;

export default storee.reducer;

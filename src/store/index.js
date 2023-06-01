import { configureStore } from "@reduxjs/toolkit";

import storee from "./storee";


const store = configureStore({
  reducer: {
    authentication: storee,
  },
});


export default store;
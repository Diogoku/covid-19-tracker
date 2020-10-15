import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import countriesReducer from "../features/countries/countriesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    countries: countriesReducer,
  },
});

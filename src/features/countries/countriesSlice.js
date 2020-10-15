import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    currentCountryInfo: { country: "Worldwide", code: "Worldwide" },
    currentInfoBoxType: "cases",
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setCurrentCountryInfo: (state, action) => {
      state.currentCountryInfo = action.payload;
    },
    setCurrentInfoBoxType: (state, action) => {
      state.currentInfoBoxType = action.payload;
    },
  },
});

// actions
export const {
  setCountries,
  setCurrentCountryInfo,
  setCurrentInfoBoxType,
} = countriesSlice.actions;

// selectors
export const selectCountries = (state) => state.countries.countries;
export const selectCurrentCountryInfo = (state) =>
  state.countries.currentCountryInfo;
export const selectCurrentInfoBoxType = (state) =>
  state.countries.currentInfoBoxType;

export default countriesSlice.reducer;

import React, { useEffect } from "react";

// REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  selectCountries,
  selectCurrentCountryInfo,
  setCurrentCountryInfo,
  setCountries,
} from "../features/countries/countriesSlice";

// AXIOS
import axios from "../axios";

// MATERIAL-UI
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// CSS
import "../css/selectCountry.css";

function SelectCountry() {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
  const currentCountryInfo = useSelector(selectCurrentCountryInfo);

  // Fetch all the countries
  useEffect(() => {
    const getCountriesData = async () => {
      await axios
        .get(`/countries/`)
        .then(({ data }) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            id: country.countryInfo._id,
            cases: country.cases,
            recovered: country.recovered,
            deaths: country.deaths,
            countryInfo: country.countryInfo,
          }));
          dispatch(setCountries(countries));
        })
        .catch((err) => console.log(err));
    };

    getCountriesData();
  }, []);

  const onCountryChange = (e) => {
    const countryCode = e.target.value;

    axios
      .get(
        `${
          countryCode === "Worldwide"
            ? "/all"
            : `/countries/${countryCode}?strict=true`
        }`
      )
      .then(({ data }) =>
        dispatch(
          setCurrentCountryInfo({
            country: countryCode === "Worldwide" ? "Worldwide" : data.country,
            code: countryCode,
            cases: data.cases,
            todayCases: data.todayCases,
            deaths: data.deaths,
            todayDeaths: data.todayDeaths,
            recovered: data.recovered,
            todayRecovered: data.todayRecovered,
            tests: data.tests,
            lat: countryCode === "Worldwide" ? null : data.countryInfo.lat,
            lng: countryCode === "Worldwide" ? null : data.countryInfo.long,
            flag: countryCode === "Worldwide" ? null : data.countryInfo.flag,
          })
        )
      )
      .catch((err) => console.log(err));
  };

  return (
    <FormControl variant="outlined">
      <Select
        value={currentCountryInfo.code}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        onChange={onCountryChange}
      >
        <MenuItem value="Worldwide">WorldWide</MenuItem>
        {countries.map((country, index) => (
          <MenuItem value={country.value} key={index}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectCountry;

import React, { useEffect } from "react";

// REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentCountryInfo,
  selectCurrentCountryInfo,
} from "./features/countries/countriesSlice";

// AXIOS
import axios from "./axios";

// COMPONENTS
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";
import TableCountries from "./components/TableCountries";
import CovidMap from "./components/CovidMap";
import CovidGraph from "./components/CovidGraph";

// CSS
import "./css/App.css";

function App() {
  const dispatch = useDispatch();
  const currentCountryInfo = useSelector(selectCurrentCountryInfo);

  useEffect(() => {
    const fetchDefaultCountryInfo = async () => {
      await axios
        .get("/all")
        .then(({ data }) =>
          dispatch(
            setCurrentCountryInfo({
              country: "Worldwide",
              code: "Worldwide",
              cases: data.cases,
              todayCases: data.todayCases,
              deaths: data.deaths,
              todayDeaths: data.todayDeaths,
              recovered: data.recovered,
              todayRecovered: data.todayRecovered,
              tests: data.tests,
            })
          )
        )
        .catch((err) => console.log(err));
    };

    fetchDefaultCountryInfo();
  }, []);

  return (
    <div className="App">
      <div className="app__leftSide">
        <Header />
        <div className="app__infoBoxes">
          <InfoBox
            title={"Corona Virus Cases"}
            cases={currentCountryInfo.todayCases}
            total={currentCountryInfo.cases}
            type={"cases"}
          />
          <InfoBox
            title={"Recovered"}
            cases={currentCountryInfo.todayRecovered}
            total={currentCountryInfo.recovered}
            type={"recovered"}
          />
          <InfoBox
            title={"Deaths"}
            cases={currentCountryInfo.todayDeaths}
            total={currentCountryInfo.deaths}
            type={"deaths"}
          />
        </div>
        <CovidMap />
        <CovidGraph />
      </div>
      <div className="app__rightSide">
        <TableCountries />
      </div>
    </div>
  );
}

export default App;

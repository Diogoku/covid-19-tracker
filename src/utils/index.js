import React from "react";
import numeral from "numeral";
import { Circle, Popup, Tooltip } from "react-leaflet";

const casesTypeColor = {
  cases: {
    hex: "#CC1034",
    multiplier: 400,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 600,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 500,
  },
};

export const sortNumberCases = (a, b) => {
  if (a.cases < b.cases) return 1;
  if (a.cases > b.cases) return -1;
  return 0;
};

// draw circles on the map with interactive tooltip
export const showDataOnMap = (countries, casesType = "recovered") =>
  countries.map((country, index) => (
    <Circle
      key={index}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColor[casesType].hex}
      fillColor={casesTypeColor[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColor[casesType].multiplier
      }
    >
      <Popup>
        <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info__name">{country.name}</div>
          <div className="info__cases">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info__recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info__deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));

// convert api data to covid graph data
export const showDataOnGraph = (last30DaysRecords) => {
  let data = [];
  Object.keys(last30DaysRecords.cases).forEach((key) => {
    data.push({
      day: key,
      cases: last30DaysRecords.cases[key],
      recovered: last30DaysRecords.recovered[key],
      deaths: last30DaysRecords.deaths[key],
    });
  });

  return data;
};

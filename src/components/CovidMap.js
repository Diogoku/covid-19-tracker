import React, { useState, useEffect } from "react";

// REACT-REDUX
import { useSelector } from "react-redux";
import {
  selectCurrentCountryInfo,
  selectCountries,
  selectCurrentInfoBoxType,
} from "../features/countries/countriesSlice";

// REACT-LEAFLET
import { Map, TileLayer } from "react-leaflet";

// UTILS
import { showDataOnMap } from "../utils";

// CSS
import "../css/covidMap.css";
import "leaflet/dist/leaflet.css";

function CovidMap() {
  const [center, setCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const currentCountryInfo = useSelector(selectCurrentCountryInfo);
  const countries = useSelector(selectCountries);
  const casesType = useSelector(selectCurrentInfoBoxType);

  useEffect(() => {
    if (currentCountryInfo.country === "Worldwide") {
      setCenter({ lat: 34.80746, lng: -40.4796 });
      setMapZoom(3);
    } else {
      setCenter({ lat: currentCountryInfo.lat, lng: currentCountryInfo.lng });
      setMapZoom(4);
    }
  }, [currentCountryInfo]);

  return (
    <div className="covidMap">
      <Map center={center} zoom={mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </Map>
    </div>
  );
}

export default CovidMap;

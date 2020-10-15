import React from "react";

// COMPONENTS
import SelectCountry from "./SelectCountry";

// MATERIAL-UI

// CSS
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <h2>Covid-19 Tracker</h2>
      <SelectCountry />
    </div>
  );
}

export default Header;

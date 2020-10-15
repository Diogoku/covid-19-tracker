import React, { useEffect, useState } from "react";

// REACT-REDUX
import { useSelector } from "react-redux";
import {
  selectCurrentCountryInfo,
  selectCurrentInfoBoxType,
} from "../features/countries/countriesSlice";

// RECHARTS
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

// AXIOS
import axios from "../axios";

// UTILS
import { showDataOnGraph } from "../utils";

// CSS
import "../css/covidGraph.css";

function CovidGraph() {
  const currentCountryInfo = useSelector(selectCurrentCountryInfo);
  const currentInfoBoxType = useSelector(selectCurrentInfoBoxType);
  const [Countrylast30DaysRecords, setCountryLast30DaysRecords] = useState([]);

  useEffect(() => {
    const fetchCountryLast30DaysRecords = async () => {
      const { data } = await axios.get(
        `/historical${
          currentCountryInfo.country === "Worldwide"
            ? "/all"
            : `/${currentCountryInfo.country}`
        }?lastdays=30`
      );
      setCountryLast30DaysRecords(
        showDataOnGraph(
          currentCountryInfo.country === "Worldwide" ? data : data.timeline
        )
      );
    };

    fetchCountryLast30DaysRecords();
  }, [currentCountryInfo]);

  const stokeCasesType = {
    cases: "#ff0000",
    recovered: "#49fc31",
    deaths: "#910000",
  };

  return (
    <div className="covidGraph">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={Countrylast30DaysRecords}
          margin={{ top: 20, right: 40, left: 40, bottom: 0 }}
        >
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={currentInfoBoxType}
            stroke={stokeCasesType[currentInfoBoxType]}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CovidGraph;

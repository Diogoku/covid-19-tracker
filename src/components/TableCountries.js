import React from "react";

// REACT-REDUX
import { useSelector } from "react-redux";
import { selectCountries } from "../features/countries/countriesSlice";

// MATERIAL-UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// UTILS
import { sortNumberCases } from "../utils";

// CSS
import "../css/tableCountries.css";

function TableCountries() {
  const countries = useSelector(selectCountries);

  return (
    <div className="tableCountries">
      <Paper elevation={1}>
        <Typography variant="h5" component="h4" color="textSecondary">
          Live Cases By Country
        </Typography>
        <TableContainer component={Paper}>
          <Table
            className="tableCountries"
            size="small"
            aria-label="a dense table"
            stickyHeader={true}
          >
            <TableHead>
              <TableRow>
                <TableCell>Country</TableCell>
                <TableCell align="right">Cases</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries
                .filter((country) => country.cases != null)
                .sort(sortNumberCases)
                .map((country) => (
                  <TableRow key={country.name}>
                    <TableCell component="th" scope="row">
                      {country.name}
                    </TableCell>
                    <TableCell align="right">{country.cases}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default TableCountries;

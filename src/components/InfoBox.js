import React from "react";

// REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentInfoBoxType,
  setCurrentInfoBoxType,
} from "../features/countries/countriesSlice";

// NUMERAL
import numeral from "numeral";

// MATERIAL-UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

// CSS
import "../css/infoBox.css";

function InfoBox({ title, cases, total, type }) {
  const dispatch = useDispatch();
  const infoBoxType = useSelector(selectCurrentInfoBoxType);

  const onChangeInfoBoxType = () => {
    dispatch(setCurrentInfoBoxType(type));
  };

  return (
    <Card>
      <CardActionArea onClick={onChangeInfoBoxType}>
        <div
          className={`infoBox__selected ${type === infoBoxType ? type : null}`}
        ></div>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>
          <Typography
            variant="h4"
            className={`${type === infoBoxType ? `${type}__text` : null}`}
          >
            {cases > 0 ? numeral(parseInt(cases)).format("+0.0a") : cases}
          </Typography>
          <Typography color="textSecondary">
            {total > 0 ? numeral(parseInt(total)).format("+0.0a") : total}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InfoBox;

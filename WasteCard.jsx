import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import DeleteIcon from "@material-ui/icons/Delete";
import Battery20Icon from "@material-ui/icons/Battery20";
import RestorePageIcon from "@material-ui/icons/RestorePage";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import { WasteDonut } from "./WasteDonut";

export const WasteCard = ({data}) => {
    let full1 = `${data.multipliers[0] * 20}`; 
    let full2 = `${data.multipliers[1] * 40}`; 
    let full3 = `${data.multipliers[2] * 50}`; 
    let full4 = `${data.multipliers[3] * 70}`; 


  let data1 = { color: "#ffc107", full: full1, label: "Trash" };
  let data2 = { color: "#8bc34a", full: full2, label: "Batteries" };
  let data3 = { color: "#607d8b", full: full3, label: "Paper" };
  let data4 = { color: "#00bcd4", full: full4, label: "Bottles" };

  return (
    <Card raised className="card">
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {data.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.type}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Grid container spacing={0}>
              <Grid item xs={1}>
                <DeleteIcon></DeleteIcon>
              </Grid>
              <Grid item xs={11}>
                <WasteDonut data={data1}></WasteDonut>
              </Grid>
            </Grid>
          </Grid>
        <Grid item xs={6}>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <Battery20Icon></Battery20Icon>
            </Grid>
            <Grid item xs={11}>
              <WasteDonut data={data2}></WasteDonut>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <RestorePageIcon></RestorePageIcon>
            </Grid>
            <Grid item xs={11}>
              <WasteDonut data={data3}></WasteDonut>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <LocalDrinkIcon></LocalDrinkIcon>
            </Grid>
            <Grid item xs={11}>
              <WasteDonut data={data4}></WasteDonut>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

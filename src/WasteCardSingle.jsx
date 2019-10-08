import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import DeleteIcon from "@material-ui/icons/Delete";
import { WasteDonut } from "./WasteDonut";

export const WasteCardSingle = ({data}) => {
    let full1 = `${data.multipliers[0] * 100}`; 


  let data1 = { color: "#ffc107", full: full1, label: "Trash" };

  return (
    <Card raised className="card single">
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {data.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.type}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
                <DeleteIcon></DeleteIcon>
                <WasteDonut data={data1}></WasteDonut>
              </Grid>

        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

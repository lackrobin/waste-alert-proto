import React from "react";
import Grid from '@material-ui/core/Grid';

import { render } from "react-dom";
import { WasteCard } from "../WasteCard";



const App = () => {
  let data1={
    name: "Bern Banhof 1",
    types: ["Trash"],
    full: [20]
  }
  let data2={
    name: "Bern Banhof 2",
    types: ["Trash", "Paper", "Glass", "Pet"],
    full: [20, 40, 70, 50]
  }
  let data3={
    name: "Bern Banhof 3",
    types: ["Batteries", "Paper", "Glass", "Pet"],
    full: [90, 10, 10, 40]
  }
  let data4={
    name: "Bern Banhof 4",
    types: ["Batteries", "Paper", "Glass", "Pet"],
    full: [60, 40, 70, 50]
  }
  
  return (
    <Grid container spacing={1}>
        <Grid item xs={3}>
        <WasteCard data={data1}></WasteCard>
        </Grid>
        <Grid item xs={3}>
        <WasteCard data={data2}></WasteCard>
        </Grid>
        <Grid item xs={3}>
        <WasteCard data={data3}></WasteCard>
        </Grid>
        <Grid item xs={3}>
        <WasteCard data={data4}></WasteCard>
        </Grid>
      </Grid>
   );
};

render(<App />, document.getElementById("root"));

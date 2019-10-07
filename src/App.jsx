import React from "react";
import Grid from "@material-ui/core/Grid";

import { render } from "react-dom";
import { WasteCard } from "./WasteCard";
import { MapCard } from "./MapCard";

const App = () => {
  let data1 = {
    name: "Bern Banhof #1",
    type: "recycle", 
    multipliers: [1,1.3,1.2,0.8]
  };
  let data2 = {
    name: "Inner City #1",
    type: "Trash" 
    , 
    multipliers: [2,1,1.1,0.3]
  };
  let data3 = {
    name: "Marzili Bahn #1",
    type: "recycle" 
    , 
    multipliers: [0.1,0.2,0.4,0.5]
  };
  let data4 = {
    name: "BFH #1",
    type: "recycle" 
    , 
    multipliers: [0.3,0.5,1.5,1]
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <MapCard
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        ></MapCard>
      </Grid>
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

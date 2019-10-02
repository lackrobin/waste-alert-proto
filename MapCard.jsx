import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { GoogleMap, Marker , withGoogleMap,withScriptjs} from "react-google-maps";
export const MapCard = withScriptjs(withGoogleMap((props) => {
  return (
    <Card raised>
      <CardContent>
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 46.943463,  lng: 7.441881 }}
        >
          <Marker position={{ lat: 46.943463, lng: 7.441881 }} />
          <Marker position={{ lat: 46.945555, lng: 7.444444 }} />
          <Marker position={{ lat: 46.946789, lng: 7.446666 }} />
          <Marker position={{ lat: 46.948491, lng: 7.437587 }} />
          
        </GoogleMap>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}));

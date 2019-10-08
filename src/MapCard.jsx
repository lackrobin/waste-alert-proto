import React from "react";
import { GoogleMap, Marker , withGoogleMap,withScriptjs} from "react-google-maps";
export const MapCard = withScriptjs(withGoogleMap((props) => {
  return (
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: 46.943463,  lng: 7.441881 }}
        >
          <Marker position={{ lat: 46.945555, lng: 7.444444 }} />
          <Marker position={{ lat: 46.946789, lng: 7.446666 }} />
          <Marker position={{ lat: 46.948491, lng: 7.437587 }} />
          
        </GoogleMap>
  );
}));

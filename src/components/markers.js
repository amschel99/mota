import React from "react";
import { Marker } from "react-map-gl";

export const Markers = ({latitude,longitude}) => {
  
  return (
    <>
   
        <Marker
          offsetTop={-48}
          offsetLeft={-24}
          latitude={latitude}
          longitude={longitude}
       >
         <img src=" https://img.icons8.com/color/48/000000/marker.png"  />
        </Marker>
 
    </>
  );
};
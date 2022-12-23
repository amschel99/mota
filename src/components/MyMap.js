import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MyMap() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });
  }, [viewport]);
  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div>
          <h1>Your Location:</h1>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;
import ReactMapGL from 'react-map-gl'
import React from 'react'




 const Map= ()=>{
    const [viewPort,setViewPort]=React.useState({
        latitude:29.763041,
        longitude:-95.386397,
        zoom:9,
        width:'50vw',
        height:'50vh'
    })
const access_token='pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA'
return <ReactMapGL mapboxAccessToken={access_token} mapboxApiAccessToken={access_token} mapStyle='mapbox://styles/mapbox/streets-v12' {...viewPort} 

>


</ReactMapGL>
}
export default Map;
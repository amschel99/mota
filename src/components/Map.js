import ReactMapGL from 'react-map-gl'
import React from 'react'


   // @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';



 //latitude:29.763041,
       // longitude:-95.386397,

 const Map= ({longitude,latitude})=>{
    const [viewPort,setViewPort]=React.useState({
        latitude:latitude,
        longitude:longitude,
        zoom:9,
        width:'100%',
        height:'100%'
    })


return (
<div className="App" style={{width:'100%',height:"900px"}}>
   
<ReactMapGL mapboxAccessToken="pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA" mapboxApiAccessToken="pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA" mapStyle='mapbox://styles/mapbox/streets-v12' {...viewPort} 
>

</ReactMapGL>





</div>
)
}
export default Map;
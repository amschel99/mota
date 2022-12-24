import ReactMapGL from 'react-map-gl'
import React from 'react'


   



 //latitude:29.763041,
       // longitude:-95.386397,

 const Map= ({longitude,latitude})=>{
    const [viewPort,setViewPort]=React.useState({
        latitude:latitude,
        longitude:longitude,
        zoom:9,
        width:'500px',
        height:'500px'
    })


return <div>
   


<ReactMapGL mapboxAccessToken="pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA" mapboxApiAccessToken="pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA" mapStyle='mapbox://styles/mapbox/streets-v12' {...viewPort} 

/>



</div>
}
export default Map;
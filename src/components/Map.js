import ReactMapGL from 'react-map-gl'
import React from 'react'



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
const access_token='pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA'

return <div className="App" style={{width:'90vw',height:'60vh',marginLeft:"5vw",marginRight:"5vw",marginTop:"10px"}}>
   


<ReactMapGL mapboxAccessToken={access_token} mapboxApiAccessToken={access_token} mapStyle='mapbox://styles/mapbox/streets-v12' {...viewPort} 

>


</ReactMapGL>

</div>
}
export default Map;
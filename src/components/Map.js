import ReactMapGL from 'react-map-gl'
import React from 'react'
import {Box } from "@mui/icons-material"


 //latitude:29.763041,
       // longitude:-95.386397,

 const Map= ({longitude,latitude})=>{
    const [viewPort,setViewPort]=React.useState({
        latitude:longitude,
        longitude:latitude,
        zoom:9,
        width:'100%',
        height:'100%'
    })
const access_token='pk.eyJ1IjoiYW1zY2hlbCIsImEiOiJjbGMwMzhvbngwbGRmM29temcweGN0cG5mIn0.gD-j9QLpchwuiUcn1BfEWA'

return <Box sx={{width:{xs:'100vw',sm:'50vw', height:'500px'}}}>


<ReactMapGL mapboxAccessToken={access_token} mapboxApiAccessToken={access_token} mapStyle='mapbox://styles/mapbox/streets-v12' {...viewPort} 

>


</ReactMapGL>
</Box>

}
export default Map;
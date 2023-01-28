import ReactMapGL from 'react-map-gl'
import React from 'react'
import {MapProvider} from "../../src/hooks/maphook";

   // @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import { Markers} from "./markers";




 const Map= ({longitude,latitude})=>{
    //const mapDispatch = useDispatchMap();
    const [viewport,setViewport]=React.useState({
        latitude:latitude,
        longitude:longitude,
        zoom:9,
        width:'100%',
        height:'100%'
    })


return (
<div className="App" style={{width:'100%',height:"400px"}}>
 <MapProvider> 
<ReactMapGL mapboxAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`} mapboxApiAccessToken={`${process.env.REACT_APP_MAPBOX_TOKEN}`} mapStyle='mapbox://styles/mapbox/streets-v12' 
onViewportChange={setViewport} {...viewport} >
 <Markers latitude={latitude} longitude={longitude}/>
</ReactMapGL>
</MapProvider> 





</div>
)
}
export default Map;
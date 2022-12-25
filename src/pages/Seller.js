import { Grid, Typography } from '@mui/material';
import Location from "@mui/icons-material/LocationCity"
import Phone from "@mui/icons-material/Call"

import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/Common/LoadingSpinner/LoadingSpinner';
import SingleCar from '../components/CarsSection/SingleCar/SingleCar';
import Map from '../components/Map.js'
import {useParams} from "react-router-dom";
import SocialFlow from "../components/Common/socialFlow/socialFlow";

const Seller = ({ dataAmount }) => {
   // const {cars}= useSelector((state)=>state.cars)
      const { userId } = useParams();
      const[userEmail,setUserEmail]=React.useState('')
      const [user,setUser]=React.useState('')
      const[location,setLocation]=React.useState('')
      const[mobile,setMobile]=React.useState('')
      const[description,setDescription]=React.useState('')
      const[facebook,setFacebook]=React.useState('')
      const[ twitter,setTwitter]=React.useState('')
      const[instagram,setInstagram]=React.useState('')
      const[longitude,setLongitude]=React.useState(null)
      const [latitude,setLatitude]=React.useState(null)




  const [cars, setCars] = useState([]);
useEffect(()=>{
 
const getUser= async ()=>{
    try{
const {data}= await axios.get(`https://milesmotors.onrender.com/seller/${userId}`)
setUserEmail(data.email)
setUser(data.name)
setLocation(data.location)
setMobile(data.mobile)
setDescription(data.description)
setFacebook(data.facebook)
setTwitter(data.twitter)
setInstagram(data.instagram)
setLongitude(parseFloat(data.longitude))
setLatitude(parseFloat(data.latitude))
const carsObject=await axios.get(`https://milesmotors.onrender.com/cars/all?user=${userEmail}`)
setCars(carsObject.data)
    }
    catch(e){
return null;
    }
}
getUser()
})





    return (!cars ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', marginTop:'100px', mx: 'auto', p: 2, justifyContent: "center" }}>
            <Typography   variant="h4" align="center" color="black" fontWeight="bold" mb={3}>  About {user}</Typography>
            <Typography sx={{fontStyle:"cursive"}} variant="h6" align="center" color="black" >
             {description}   
            </Typography>

            <Typography  align="center" color="black"  mb={3} sx={{marginTop:"20px"}}  >
            <span>We are located at {location}</span> 
            
            </Typography>
             <Typography sx={{marginTop:"20px"}} align="center" color="black"  mb={3}  >
            MAP
            
            </Typography>

          {longitude && latitude ? <Box sx={{width:"80vw",marginLeft:{xs:'15vw',sm:'10vw'},marginRight:'10px',marginTop:'20px'}}>
             {longitude && latitude ?  <Map longitude={longitude} latitude={latitude}/>:<div>loading map...</div>}
            </Box>:null}


             <Typography
               component='a' href={`tel:${mobile}`}
                variant="p"
                
              sx={{display:'flex',justifyContent:'center',alignItems:'center',color:'red',width:'100vw',marginTop:'10px',fontStyle:'cursive'}}
                fontWeight={700}
              >
              <Phone sx={{marginTop:'15px',marginRight:"15px"}}/> Call  {mobile}
              </Typography>
             
            

            <Typography sx={{marginTop:'10px'}} variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Cars in inventory</Typography>
         {userEmail?   <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
                sx={{ justifyContent: 'center' }}>
                {
                    cars.map(carInfo => <SingleCar carInfo={carInfo} key={carInfo._id} />)
                }
            </Grid>:<div>Failed to load cars</div>}
            <SocialFlow facebook={facebook} twitter={twitter} instagram={instagram} mobile={mobile}/>
        </Box>
    );
};

export default Seller;
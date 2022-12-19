import { Grid, Typography } from '@mui/material';
import Location from "@mui/icons-material/LocationCity"
import Phone from "@mui/icons-material/Call"

import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/Common/LoadingSpinner/LoadingSpinner';
import SingleCar from '../components/CarsSection/SingleCar/SingleCar';
import {   useSelector} from 'react-redux'
import {useParams} from "react-router-dom";
import SocialFlow from "../components/Common/socialFlow/socialFlow";

const Seller = ({ dataAmount }) => {
    const {cars}= useSelector((state)=>state.cars)
      const { userId } = useParams();
      const[userEmail,setUserEmail]=React.useState('')
      const [user,setUser]=React.useState('')
      const[location,setLocation]=React.useState('')
      const[mobile,setMobile]=React.useState('')
      const[description,setDescription]=React.useState('')
      const[facebook,setFacebook]=React.useState('')
      const[ twitter,setTwitter]=React.useState('')
      const[instagram,setInstagram]=React.useState('')
      const[carDetails,setCarDetails]=React.useState([]) 
//const {search}= useSelector((state)=>state.query)
//const {type}= useSelector((state)=>state.type)

   // const [cars, setCars] = useState(null);
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
 const carDetails= cars.find((car)=>car.user===userEmail)
 setCarDetails(carDetails)
    }
    catch(e){
return null;
    }
}
getUser()
},[userId,cars,userEmail])



    //useEffect(() => {
        // const FetchCars = async () => {
            
      //  const {data} =  await axios.get(`https://milesmotors.onrender.com/cars/all?user=${userEmail}`,{
       //     params:{
         //       name:search,
       //         brand:type
        //    }
       // })
       // setCars(data)
       
   // }
      //  FetchCars()   
  //  }, [dataAmount,search,type,userEmail])


    return (!carDetails ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', marginTop:'100px', mx: 'auto', p: 2, justifyContent: "center" }}>
            <Typography   variant="h4" align="center" color="black" fontWeight="bold" mb={3}> More Details About {user}</Typography>
            <Typography  variant="h6" align="center" color="primary" >
             {description}   
            </Typography>

            <Typography  align="center" color="black"  mb={3}  >
            <Location sx={{marginRight:'10px',marginTop:'5px'}}/><span>{location}</span> 
            
            </Typography>

             <Typography
               component='a' href={`tel:${mobile}`}
                variant="p"
                
              sx={{display:'flex',justifyContent:'center',alignItems:'center',color:'blue',width:'100vw'}}
                fontWeight={700}
              >
              <Phone sx={{marginTop:'2px',marginRight:"5px"}}/> Call {user } {mobile}
              </Typography>
             
            

            <Typography sx={{marginTop:'10px'}} variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Popular Cars by {user}</Typography>
         {userEmail?   <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
                sx={{ justifyContent: 'center' }}>
                {
                    carDetails.map(carInfo => <SingleCar carInfo={carInfo} key={carInfo.carID} />)
                }
            </Grid>:<div>Failed to load cars</div>}
            <SocialFlow facebook={facebook} twitter={twitter} instagram={instagram} mobile={mobile}/>
        </Box>
    );
};

export default Seller;
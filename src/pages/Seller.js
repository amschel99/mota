import { Grid, Typography } from '@mui/material';
import Location from "@mui/icons-material/LocationCity"
import Phone from "@mui/icons-material/Call"
import Whatsapp from "@mui/icons-material/WhatsApp"
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../components/Common/LoadingSpinner/LoadingSpinner';
import SingleCar from '../components/CarsSection/SingleCar/SingleCar';
import {   useSelector} from 'react-redux'
import {useParams,Link } from "react-router-dom";
import SocialFlow from "../components/Common/socialFlow/socialFlow";

const Seller = ({ dataAmount }) => {
      const { userId } = useParams();
      const[userEmail,setUserEmail]=React.useState('')
      const [user,setUser]=React.useState('')
      const[location,setLocation]=React.useState('')
      const[mobile,setMobile]=React.useState('')
      const[description,setDescription]=React.useState('')
      const[facebook,setFacebook]=React.useState('')
      const[ twitter,setTwitter]=React.useState('')
      const[instagram,setInstagram]=React.useState('')
      
const {search}= useSelector((state)=>state.query)
const {type}= useSelector((state)=>state.type)

    const [cars, setCars] = useState(null);
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
    }
    catch(e){

    }
}
getUser()
},[userId])

    useEffect(() => {
         const FetchCars = async () => {
            
        const {data} =  await axios.get(`https://milesmotors.onrender.com/cars/all?user=${userEmail}`,{
            params:{
                name:search,
                brand:type
            }
        })
        setCars(data)
        console.log("dataNumber", data)
    }
        FetchCars()   
    }, [dataAmount,search,type,userEmail])


    return (!cars ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', mx: 'auto', p: 2, justifyContent: "center" }}>
            <Typography   variant="h4" align="center" color="black" fontWeight="bold" mb={3}> More Details About {user}</Typography>
            <Typography  variant="h6" align="center" color="primary" >
             {description}   
            </Typography>
            <Typography  align="center" color="black"  mb={3}  >
            <Location sx={{marginRight:'10px',marginTop:'5px'}}/><span>{location}</span> 
            
            </Typography>
             <Typography  component='a' href={`tel:${mobile}`}  align="center" color="blue" mb={6} >
          
                <Phone sx={{marginTop:'2px',marginRight:"5px"}}/> Call {mobile}
            </Typography>
            

            <Typography variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Popular Cars by {user}</Typography>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
                sx={{ justifyContent: 'center' }}>
                {
                    cars.map(carInfo => <SingleCar carInfo={carInfo} key={carInfo.carID} />)
                }
            </Grid>
            <SocialFlow facebook={facebook} twitter={twitter} instagram={instagram} mobile={mobile}/>
        </Box>
    );
};

export default Seller;
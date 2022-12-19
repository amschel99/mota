import { Grid, Typography} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect} from 'react';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';
import SingleCar from './SingleCar/SingleCar';

import {   useSelector,useDispatch} from 'react-redux'
//import { search } from "../../../../src/features/query.js";
import { cars as car} from '../../features/cars';

const CarsSection = ({ dataAmount }) => {
   const dispatch = useDispatch();    
const {search}= useSelector((state)=>state.query)
const {type}= useSelector((state)=>state.type)
const {cars}= useSelector((state)=>state.cars)

    //const [cars, setCars] = useState(null);


    

    useEffect(() => {
         const FetchCars = async () => {
            
        const {data} =  await axios.get(`https://milesmotors.onrender.com/cars/all`,{
            params:{
                name:search,
                brand:type
               
            }
        })

         dispatch(car({ cars: data}));
       
       // setCars(data)
      
     window.scrollTo({
  top: 1000,
  left: 10,
  behavior: 'smooth'
});
    }

        FetchCars()   
    }, [dataAmount,search,type,dispatch])


    return (!cars ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', mx: 'auto', p: 2, justifyContent: "center" }}>

     

            <Typography variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Popular Cars</Typography>
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 4 }}
                sx={{ justifyContent: 'center' }}>
                {
                    cars.map(carInfo => <SingleCar carInfo={carInfo} key={carInfo._id} />)
                }
            </Grid>
        </Box>
    );
};

export default CarsSection;
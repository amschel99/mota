import { Grid, Typography} from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';
import SingleCar from './SingleCar/SingleCar';
import PriceSlider from '../CarsSection/../../components/Slider'
import {   useSelector} from 'react-redux'


const CarsSection = ({ dataAmount ,setClickedColor}) => {
      
const {search}= useSelector((state)=>state.query)
const {type}= useSelector((state)=>state.type)

    const [cars, setCars] = useState(null);


    const[price,setPrice]=React.useState(20000000)

    useEffect(() => {
         const FetchCars = async () => {
            
        const {data} =  await axios.get(`https://milesmotors.onrender.com/cars/${dataAmount ? dataAmount : 'all'}`,{
            params:{
                name:search,
                brand:type,
                numericFilters:`price<=${price}`
            }
        })
       
        setCars(data)
       setClickedColor("white")
     window.scrollTo({
  top: 1000,
  left: 10,
  behavior: 'smooth'
});
    }

        FetchCars()   
    }, [dataAmount,search,type,price])


    return (!cars ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', mx: 'auto', p: 2, justifyContent: "center" }}>
           <PriceSlider price={price} setPrice={setPrice}/>
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
import { Grid, Typography,Slider } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';
import SingleCar from './SingleCar/SingleCar';
import {   useSelector} from 'react-redux'


const CarsSection = ({ dataAmount }) => {
      
const {search}= useSelector((state)=>state.query)
const {type}= useSelector((state)=>state.type)

    const [cars, setCars] = useState(null);

const[price,setPrice]=React.useState(20000000)
    const marks = [
   
  {
    value: 1000000,
    label: '1m',
  },
 
  
  {
    value:5000000,
    label: '5m',
  },
     {
    value:10000000,
    label: '10m',
  },
   {
    value:15000000,
    label: '15m',
  },
   {
    value:20000000,
    label: '20m',
  },
];

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
     window.scrollTo({
  top: 700,
  left: 100,
  behavior: 'smooth'
});
    }

        FetchCars()   
    }, [dataAmount,search,type,price])

const getText=(value)=>`${value}`
    return (!cars ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', mx: 'auto', p: 2, justifyContent: "center" }}>
            <Typography variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Filter by price</Typography>
             <Box sx={{ width: {md:'80vw'} }}>
      <Slider
        aria-label="Price Range"
        
       min={500000}
       max={20000000}
       step={null}
        getAriaValueText={getText}
        valueLabelDisplay="auto"
        marks={marks}
        value={price}
      
        onChange={(e,value)=>{setPrice(value)}}
       
      />
    </Box>
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
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
    value: 300000,
    label: 'ksh 300,000',
  },
  {
    value: 500000,
    label: 'ksh 500,000',
  },
  {
    value: 1000000,
    label: 'ksh 1,000,000',
  },
  {
    value: 1500000,
    label: 'ksh 1,500,000',
  },
  {
    value:2000000,
    label: 'ksh 2,000,000',
  },
   {
    value:3000000,
    label: 'ksh 3,000,000',
  },
   {
    value:4000000,
    label: 'ksh 4,000,000',
  },
   {
    value:7000000,
    label: 'ksh 7,000,000',
  },
   {
    value:10000000,
    label: 'ksh 10,000,000',
  },
   {
    value:15000000,
    label: 'ksh 15,000,000',
  },
   {
    value:20000000,
    label: 'ksh 20,000,000',
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
        console.log("dataNumber", data)
    }
        FetchCars()   
    }, [dataAmount,search,type,price])


    return (!cars ? <LoadingSpinner style={{ padding: '100px 0' }} /> :
        <Box sx={{ maxWidth: 'xl', mx: 'auto', p: 2, justifyContent: "center" }}>
            <Typography variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Sort cars by price</Typography>
             <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Price Range"
        
       
        step={200000}
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
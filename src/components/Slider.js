import React from 'react'
import {Box,Typography,Slider} from "@mui/material"

const PriceSlider = ({price,setPrice}) => {

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
const getText=(value)=>`${value}`
  return (
    <Box sx={{width:'80vw',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
     <Typography variant="h4" align="center" color="primary" fontWeight="bold" mb={6}>Filter by price</Typography>
             <Box sx={{width:{xs:'60vw',sm:'45vw'}}}>
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
    </Box>
  )
}

export default PriceSlider
import React from 'react'
import Drawer from '../components/Drawer'
import AddNewCar from '../components/Dashboard/AdminParts/AddNewCar'
import {Box} from "@mui/material"

const Profile = () => {
  return (
   <Box sx={{width:'100vw',display:'flex'}}>
<Box sx={{flex:1}}>
<Drawer/>
</Box>
<Box sx={{flex:1}}>
<AddNewCar/>
</Box>
    
   </Box>
  )
}

export default Profile
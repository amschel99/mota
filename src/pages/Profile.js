import React from 'react'
import Drawer from '../components/Drawer'
//import AddNewCar from '../components/Dashboard/AdminParts/AddNewCar'
import Update from '../components/Update'
import {Stack} from "@mui/material"

const Profile = () => {
  return (
  <Stack sx={{display:{xs:'none',sm:'flex'}}} direction="row" spacing={40} p={2}>
<Drawer/>

<Update/>

</Stack>
    
  
  )
}

export default Profile
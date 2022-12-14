import React from 'react'
import Drawer from '../components/Drawer'
import AddNewCar from '../components/Dashboard/AdminParts/AddNewCar'

import {Stack} from "@mui/material"

const Profile = () => {
  return (
  <Stack direction="row" spacing={40} p={2}>
<Drawer/>

<AddNewCar/>

</Stack>
    
  
  )
}

export default Profile
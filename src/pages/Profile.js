import React from 'react'
import Drawer from '../components/Drawer'
import AddNewCar from '../components/Dashboard/AdminParts/AddNewCar'
import Update from '../components/Update'
import ShareProfile from '../components/ShareProfile'
import {Stack} from "@mui/material"

const Profile = () => {
    const[update,setUpdate]=React.useState(false)
      const[add,setAdd]=React.useState(true)
        const[deleteComponent,setDelete]=React.useState(false)
          const[share,setShare]=React.useState(false)

  return (
  <Stack sx={{display:{xs:'none',sm:'flex'}}} direction="row" spacing={50} p={2}>
<Drawer  setUpdate={setUpdate} setAdd={setAdd} setDelete={setDelete} setShare={setShare}/>
{add && <AddNewCar/>}
{update && <Update/> }
{share && <ShareProfile/> }


</Stack>
    
  
  )
}

export default Profile
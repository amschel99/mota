import React from 'react'
import Drawer from '../components/Drawer'
import MobileDrawer from '../components/MobileDrawer'
import AddNewCar from '../components/Dashboard/AdminParts/AddNewCar'
import Delete from "../components/Dashboard/AdminParts/ManageCars"
import Update from '../components/Update'
import ShareProfile from '../components/ShareProfile'
import MenuIcon from "@mui/icons-material/Menu"
import {Stack,IconButton,Box} from "@mui/material"

const Profile = () => {
      const[open,setOpen]=React.useState(false)
    const[update,setUpdate]=React.useState(false)
      const[add,setAdd]=React.useState(true)
        const[deleteComponent,setDelete]=React.useState(false)
          const[share,setShare]=React.useState(false)

  return (
  <Stack  direction="row" spacing={{xs:'6',sm:'50'}} p={2}>
    <IconButton
               onClick={()=>setOpen((prev)=>!prev)}
                aria-label="Menu"
                sx={{display:{xs:"block",sm:"none"},color:'red',position:'absolute',top:'0vw',marginBottom:'5px',left:'0vw'}}
                >
                    <MenuIcon/>
                </IconButton>
<Drawer  setUpdate={setUpdate} setAdd={setAdd} setDelete={setDelete} setShare={setShare}/>
<MobileDrawer open={open} setOpen={setOpen}  setUpdate={setUpdate} setAdd={setAdd} setDelete={setDelete} setShare={setShare}/>


             
{add && <AddNewCar/>}
{update && <Update/> }
{share && <ShareProfile/> }

{deleteComponent &&<Delete/> }
</Stack>
    
  
  )
}

export default Profile
import React from 'react'

import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader,Button} from '@mui/material'
import {Add,Update,Delete,Share,Logout} from "@mui/icons-material"
import useAuth from "../others/useAuthContext"
import {useHistory} from 'react-router-dom'
const MobileDrawer = ({open,setOpen,setAdd,setDelete,setShare, setUpdate}) => {
    const history=useHistory()
    
  
    const{logout}=useAuth()
async function handleLogout(){
 
   try{
await logout()
history.push("/login")
   }
   catch(e){
  return null
   }

  }
    const [items]=React.useState({
      Actions:[
        {label:"Add New Car",Icon:Add,state:'setAdd'},
          {label:"Update Account",Icon:Update,state:'setUpdate'},
            {label:"Delete Car",Icon:Delete,state:'setDelete'},
              {label:"Share Profile",Icon:Share,state:'setShare'},
                {label:"Logout",Icon:Logout,state:'setShare'}
      ]
      


    })

    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon,state},i)=>{
            return <ListItem component={Button}  key={i}
            onClick={()=>{
              if(i===0){
                setUpdate(false)
                setDelete(false)
                setShare(false)
                setOpen(false)
                return setAdd(true)
              }
               if(i===1){
                 setAdd(false)
                setDelete(false)
                setShare(false)
                setOpen(false)
                return setUpdate(true)

              }
               if(i===2){
                 setAdd(false)
                setUpdate(false)
                setShare(false)
                setOpen(false)
                return setDelete(true)
              }
               if(i===3){
                 setAdd(false)
                setUpdate(false)
                setDelete(false)
                setOpen(false)
                return setShare(true)
              }
               if(i===4){
              return handleLogout()
              }
            }}
            >

<ListItemIcon>
    <Icon/>
</ListItemIcon>
<ListItemText>{label}</ListItemText>

            </ListItem>
        })}
        </>
    }
  return (
    <Drawer
      PaperProps={{
    sx: {
      width:{xs:'200',sm:'300'},
      marginTop:{xs:'70px',sm:'125px'},
       backgroundColor:'white',
       'z-index':5,
       height:'100vh'
    }
  }}
    open={open} onClose={()=>setOpen(false)} variant='temporary' sx={{'z-index':5,display:{xs:'block',sm:'none'} }} >
<List >
<ListSubheader>Actions</ListSubheader>
<ListItems items={items.Actions}/>

</List>
    </Drawer>
  )
}

export default MobileDrawer
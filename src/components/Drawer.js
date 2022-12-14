import React from 'react'
import {Link} from 'react-router-dom'
import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader,Button} from '@mui/material'
import {Add,Update,Delete,Share,Logout} from "@mui/icons-material"
import useAuth from "../others/useAuthContext"
import {useHistory} from 'react-router-dom'
const DrawerComponent = ({setAdd,setDelete,setShare, setUpdate}) => {
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
                return setAdd(true)
              }
               if(i===1){
                 setAdd(false)
                setDelete(false)
                setShare(false)
                return setUpdate(true)

              }
               if(i===2){
                 setAdd(false)
                setUpdate(false)
                setShare(false)
                return setDelete(true)
              }
               if(i===3){
                 setAdd(false)
                setUpdate(false)
                setDelete(false)
                return setShare(true)
              }
               if(i===4){
              return handleLogout
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
      width: 300,
      marginTop:'130px',
       backgroundColor:'white',
       
       height:'100vh'
    }
  }}
    variant='permanent' sx={{'z-index':5, backgroundColor:'transparent', display:{xs:'none',sm:'block'}}} >
<List >
<ListSubheader>Actions</ListSubheader>
<ListItems items={items.Actions}/>

</List>
    </Drawer>
  )
}

export default DrawerComponent
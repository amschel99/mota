import React,{useState} from 'react'
import {Box,List,ListItem,ListItemIcon,ListItemText,Switch} from "@mui/material"
import {Add,Update,Delete,Share} from "@mui/icons-material"
import {Link} from "react-router-dom"


const Sidebar = ({mode,setMode}) => {


  const [items]=useState({
      Actions:[
        {label:"Add New Car",Icon:Add,path:'add'},
          {label:"Update Account",Icon:Update,path:'update'},
            {label:"Delete Car",Icon:Delete,path:'delete'},
              {label:"Share Profile",Icon:Share,path:'share'}
      ]
      


    })
  return (
<Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
  <Box position="fixed">

     
        <List >
          {items.map(({label,Icon},i)=>(
            <ListItem key={i} component={Link} to="/">
              <ListItemIcon><Icon/></ListItemIcon>
              <ListItemText>{label}</ListItemText>


            </ListItem>


          ))}
           <ListItem>
              <ListItemIcon>
                
                </ListItemIcon>
     <Switch onChange={()=>setMode(mode==="light"?"dark":"light")}>

     </Switch>


            </ListItem>

        </List>

     </Box>
 </Box>
  )
}

export default Sidebar
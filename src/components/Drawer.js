import React from 'react'
import {Link} from 'react-router-dom'
import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader,Button} from '@mui/material'
import {Add,Update,Delete,Share} from "@mui/icons-material"
const DrawerComponent = ({setAdd,setDelete,setShare, setUpdate}) => {

    const [items]=React.useState({
      Actions:[
        {label:"Add New Car",Icon:Add,state:'setAdd'},
          {label:"Update Account",Icon:Update,state:'setUpdate'},
            {label:"Delete Car",Icon:Delete,state:'setDelete'},
              {label:"Share Profile",Icon:Share,state:'setShare'}
      ]
      


    })

    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon,state},i)=>{
            return <ListItem component={Button}  key={i}
            onClick={()=>{
                state(true)
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
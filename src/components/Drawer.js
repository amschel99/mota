import React from 'react'
import {Link} from 'react-router-dom'
import {ListItem,ListItemIcon,ListItemText,Drawer,List,ListSubheader} from '@mui/material'
import {Add,Update,Delete,Share} from "@mui/icons-material"
const DrawerComponent = () => {

    const [items]=React.useState({
      Actions:[
        {label:"Add New Car",Icon:Add,path:'add'},
          {label:"Update Account",Icon:Update,path:'update'},
            {label:"Delete Car",Icon:Delete,path:'delete'},
              {label:"Share Profile",Icon:Share,path:'share'}
      ]
      


    })

    const ListItems=({items})=>{
        return <>
        {items.map(({label,Icon,path},i)=>{
            return <ListItem component={Link} to={`${path}`} key={i}>

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
      width: 240,
       backgroundColor:'transparent',
       'z-index':5
    }
  }}
    variant='permanent' sx={{'z-index':5, backgroundColor:'transparent', display:{xs:'none',sm:'block'}}} >
<List sx={{marginTop:25}}>
<ListSubheader>Actions</ListSubheader>
<ListItems items={items.Actions}/>

</List>
    </Drawer>
  )
}

export default DrawerComponent
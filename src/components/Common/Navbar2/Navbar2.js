import React,{useState,useEffect} from "react"
import {AppBar,Toolbar,IconButton,Slide,Box} from "@mui/material"
import {NavLink} from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"





const Navbar2= ({setOpen})=>{
    const [scrolling,setScrolling]=useState(false)
    const [scrollTop, setScrollTop]=useState(0)



    useEffect(()=>{
           function handleScroll(e){
        setScrollTop(e.target.documentElement.scrollTop)
        setScrolling(e.target.documentElement.scrollTop>scrollTop)
    }


        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }

    },[scrolling,scrollTop])

    useEffect(()=>{
       return  setScrolling((prev)=>prev!==scrolling)
    },[scrolling])



    return (
        
          
         <AppBar 
         
           
        sx={{
          background: "white",
         height:'10px',
          maxHeight: "10px",
         
        }}>
            <Toolbar sx={{
            width: "100vw",
            maxWidth: "100vw",
            margin: "auto",
          }}>
                <IconButton
               onClick={()=>setOpen((prev)=>!prev)}
                aria-label="Menu"
                sx={{display:{xs:"block",sm:"none"},color:'red'}}
                >
                    <MenuIcon/>
                </IconButton>
               <Box
                sx={{ width: { xs: "25vw", sm: "20vw" } }}
                component={NavLink}
                to="/"
                id="header-logo"
              >
                <Box
                  component="img"
                  src="/images/logo.jpg"
                  sx={{ width: { xs: "25vw", sm: "20vw" },marginTop:{xs:'10px',sm:'0'} }}
                />

              </Box>
               
            </Toolbar>


         </AppBar>
      



  
    )
}
export default Navbar2

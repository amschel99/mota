import React,{useState,useEffect} from "react"
import {AppBar,Toolbar,Box} from "@mui/material"
import {NavLink} from "react-router-dom"






const Navbar3= ({setOpen})=>{
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
         height:'90px',
          maxHeight: "90px",
          'z-index':5
         
        }}>
            <Toolbar sx={{
            width: "100vw",
            maxWidth: "100vw",
            margin: "auto",
          }}>
               
               <Box
                sx={{ width: { xs: "50vw", sm: "30vw" } }}
                component={NavLink}
                to="/"
                id="header-logo"
              >
                <Box
                  component="img"
                  src="/images/logo.png"
                  sx={{ width: { xs: "50vw", sm: "30vw" },marginTop:{xs:'10px',sm:'0'} }}
                />

              </Box>
               
            </Toolbar>


         </AppBar>
      



  
    )
}
export default Navbar3

import React from "react";
import "./Navbar2.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

import { NavLink } from "react-router-dom";







function changeHeaderOnScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150)
      document.querySelector("header").style.padding = "10px 0";
    else if (window.scrollY < 100)
      document.querySelector("header").style.padding = "20px 0";
  });
}

const Navbar2 = ({setOpen}) => {


 
  

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "white",
          boxShadow: "initial",
          maxHeight: "200px",
          overflow: "hidden",
          transition: "500ms ease",
        }}
        onLoad={changeHeaderOnScroll}
      >
        <Toolbar
          sx={{
            width: "100vw",
            maxWidth: "100vw",
            margin: "auto",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { xs: "space-around", sm: "space-between" },
              marginLeft: { xs: "0", sm: "0" },
            }}
          >
            <Box sx={{ display: { xs: "block", sm: "block" } }} flex={2}>
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
            </Box>

            {/*logo goes up */}
           
            <Box flex={2}>
              <Box id="header-menu-toggler">
               <IconButton
               onClick={()=>setOpen((prev)=>!prev)}
                aria-label="Menu"
                sx={{display:{xs:"block",sm:"none"},color:'red',position:'absolute',top:'0vw',marginBottom:'5px',left:'0vw'}}
                >
                    <MenuIcon/>
                </IconButton>
              </Box>
 
             
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar2;

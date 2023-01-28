import React from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Menu, MenuItem, TextField,Select,InputLabel,ListSubheader,InputAdornment,OutlinedInput} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../../../../src/features/query.js";
import axios from "axios"



/** <TextField
              sx={{width:{xs:'35vw',sm:'30vw'}, position:{xs:'absolute', sm:"relative"}, right:{xs:'90px',sm:'0'}}}
                onChange={(e) => {
                   setValue(e.target.value);
               return;
                
                   
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                     
                    return dispatch(search({ search: value }));
                  }
                }}
                id="outlined-basic"
                label="Search"
                variant="outlined"
                size="small"
               
              /> */
const toggleHeaderVisibility = () => {
  document.getElementById("header-links").classList.toggle("show");
};

function changeHeaderOnScroll() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150)
      document.querySelector("header").style.padding = "10px 0";
    else if (window.scrollY < 100)
      document.querySelector("header").style.padding = "20px 0";
  });
}

const Navbar = () => {
const searchRef=React.useRef()
const [cars,setCars]=React.useState([])
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
const[searchText,setSearchText]=React.useState('')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
 React.useEffect(()=>{

const fetchCars= async ()=>{
try{
  
const {data}=await axios.get(`https://milesmotors.onrender.com/cars/all?name=${value}`)

setCars(data)


}
catch(error){

return;
}
        
}
fetchCars()
},[value])
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                sx={{ width: { xs: "30vw", sm: "20vw" } }}
                component={NavLink}
                to="/home"
                id="header-logo"
              >
                <Box
                  component="img"
                  src="/images/logo.png"
                  alt="logo with a car and description"
                  sx={{ width: { xs: "30vw", sm: "20vw" },marginTop:{xs:'10px',sm:'0'},marginRight:{xs:'100px', sm:'0'} }}
                />

              </Box>
            </Box>

            {/*logo goes up */}
            <Box sx={{ display: "flex", width:{xs:'40vw',sm:'60vw'}, flex: { xs: 6, sm: 3 },marginRight:{xs:"0px",sm:'15px'} }}>



           
        <Select
         sx={{width:{xs:'40vw',sm:'30vw'},height:"40px", position:{xs:'absolute', sm:"relative"}, right:{xs:'90px',sm:'0'}}}
     
         MenuProps={{ autoFocus: false }}
          labelId="search-select-label"
          id="search-select"
          value={searchText}
          label="Search car"
         
     
         
          input={<OutlinedInput label="Location" />}
          onChange={(event)=>{
         searchRef.current.value=event.target.value
          setSearchText(event.target.value)
               return dispatch(search({ search:event.target.value}));
  
          }}
          onClose={()=>{
            setValue('')
          }}
               renderValue={() => searchText}
        >
            <ListSubheader>
           <TextField
            //sx={{width:{xs:'55vw',sm:'30vw'}, position:{xs:'absolute', sm:"relative"}, right:{xs:'90px',sm:'0'}}}
           size="small"
              // Autofocus on textfield
              autoFocus

                  required
                  fullWidth
                  name="location"
                  label="Search car"
                  type="text"
                  id="location"
                 

                   inputRef={searchRef}
           
             InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
             onChange={ (e)=>{
setValue(e.target.value)
             }}
             onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
                />
                </ListSubheader>
          {cars.map(({carName,_id}) => (
            <MenuItem
              key={_id}
              value={carName}
              
            >
              {carName}
            </MenuItem>
          ))}
        </Select>
             

          
            </Box>

            <Box flex={2}>
              <Box sx={{marginRight:'10px'}} id="header-menu-toggler">
                <IconButton
                
                  size="large"
                  edge="start"
                  aria-label="open drawer"
                  onClick={toggleHeaderVisibility}
                >
                  <MenuIcon color="primary" />
                </IconButton>
              </Box>

              <Box noWrap id="header-links">
                <NavLink
                  to="/home"
                  exact
                  activeClassName="active"
                  onClick={toggleHeaderVisibility}
                >
                  <Typography variant="h6">Home</Typography>
                </NavLink>
                
                <NavLink
                  to="/about"
                  activeClassName="active"
                  onClick={toggleHeaderVisibility}
                >
                  <Typography variant="h6">About</Typography>
                </NavLink>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  onClick={toggleHeaderVisibility}
                >
                  <Typography variant="h6">Contact</Typography>
                </NavLink>

                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    sx={{ padding: "5px", margin: 0 }}
                  >
                    <Box
                      sx={{
                        width: "30px",
                        height: "30px",
                        background: "#ff000055",
                        borderRadius: "50%",
                        overflow: "hidden",
                      }}
                    >
                      <img src="https" alt="" style={{ width: "100%" }} />
                    </Box>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <NavLink
                      to="/profile"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      <MenuItem
                        sx={{ px: 4 }}
                        onClick={() => {
                          handleClose();
                          toggleHeaderVisibility();
                        }}
                      >
                        Profile
                      </MenuItem>
                    </NavLink>
                  </Menu>
                </div>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { search } from "../../../../src/features/query.js";
import { type } from "../../../../src/features/sort.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

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
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
            <Box sx={{ display: { xs: "none", sm: "block" } }} flex={2}>
              <Box
                sx={{ width: { xs: "35vw", sm: "20vw" } }}
                component={NavLink}
                to="/"
                id="header-logo"
              >
                <Box
                  component="img"
                  src="/images/logo.jpg"
                  sx={{ width: { xs: "35vw", sm: "20vw" } }}
                />

              </Box>
            </Box>

            {/*logo goes up */}
            <Box sx={{ display: "flex", flex: { xs: 6, sm: 3 } }}>
              <TextField
                onChange={(e) => {
                  setValue(e.target.value);
                   
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
                sx={{ width: "100%" }}
              />

           {
            /** 
            <button
                style={{
                  height: "40px",
                  width: "30px",
                  backgroundColor: "red",
                  border: "none",
                  borderRadius: "3px",
                  outline: "none",
                  position: "relative",
                  right: "25px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  return dispatch(search({ search: value }));
                }}
              >
                

              <FontAwesomeIcon icon={faSearch} />
              
              </button>
           
              <select
                onChange={(e) => {
                  return dispatch(type({ type: e.target.value }));
                }}
                style={{
                  position: "relative",
                  right: "1vw",
                  height: "34px",
                  border: "none",
                  outline: "none",
                  marginTop: "3px",
                  marginBottom: "2px",
                  width: "55px",
                }}
              >
                <option>sort</option>
                <option value="Bmw">BMW</option>
                <option value="Ford">Ford</option>
                <option value="Porsche">Porsche</option>
                <option value="Toyota">Toyota</option>
                <option value="Audi">Audi</option>
                <option value="Subaru">Subaru</option>
                <option value="Mazda">Mazda</option>
                <option value="Nissan">Nissan</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Volkswagen">Volkswagen</option>
                  <option value="Honda">Honda</option>
                  <option value="Mitsubishi">Mitsubishi</option>
                
                <option></option>
              </select>
                  */} 
            </Box>

            <Box flex={2}>
              <Box id="header-menu-toggler">
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
                  to="/"
                  exact
                  activeClassName="active"
                  onClick={toggleHeaderVisibility}
                >
                  <Typography variant="h6">Home</Typography>
                </NavLink>
                <NavLink
                  to="/cars"
                  activeClassName="active"
                  onClick={toggleHeaderVisibility}
                >
                  <Typography variant="h6">Explore</Typography>
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

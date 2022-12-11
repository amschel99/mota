import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { alpha, Box, styled } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import useAuth from "../SingleCar/../../../others/useAuthContext"
const Icon = styled("i")(({ theme }) => ({
  color: theme.palette.primary.light,
  fontSize: "22px",
}));


const SingleCar = ({ carInfo }) => {
   const {currentUser}=useAuth()
  const {
    carID,
    carImg,
    carName,
    carType,
    transmission,
    fuel,
    color,
    mileage,
    price,
    engine,
    user
  } = carInfo;
const [userName,setUserName]=React.useState('')
React.useEffect(()=>{
 const getUser= async ()=>{
  try{
const {data}= await axios.post(`https://milesmotors.onrender.com/auth/login`,{
  email:user
})
const {name}=data
setUserName(name)
  }

  catch(e){

  }
 }
 getUser()
},[user])
  // Numbers over 1000 to separated by commas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{display: "flex", justifyContent: "center"}}>
      <NavLink to={`/cars/details/${carID}`}>
        <Box sx={{ display: "flex", flexDirection: "column"}}>
        <Card sx={{ maxWidth: 300, minWidth: 300}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={carImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="red">
               Ksh {numberWithCommas(price)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={700}
              >
                {carName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span style={{ backgroundColor: "#EEF0F8" }}>
                  {transmission}
                </span>{" "}
                | <span style={{ backgroundColor: "#EEF0F8" }}>{fuel}</span>
              </Typography>
               <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={700}
              >
               Seller:  {userName}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Details
            </Button>
          </CardActions>
        </Card>
        </Box>
      </NavLink>
    </Grid>
  );
};

export default SingleCar;

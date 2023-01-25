import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from "react";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.jpg'
import image8 from '../images/image8.jpg'
import image9 from '../images/image9.jpg'
import image10 from '../images/image10.jpg'
import image11 from '../images/image11.jpg'
import image12 from '../images/image12.jpg'
import image13 from '../images/image13.jpg'
import image14 from '../images/image14.jpg'
import image15 from '../images/image15.jpg'
import image16 from '../images/image16.jpg'
import image17 from '../images/image17.jpg'
import image18 from '../images/image18.jpg'
import image19 from '../images/image19.jpg'
import image20 from '../images/image20.jpg'
import image21 from '../images/image21.jpg'
import image22 from '../images/image22.jpg'
import image23 from '../images/image23.jpg'
import image24 from '../images/image24.jpg'
import image25 from '../images/image25.jpg'
import image26 from '../images/image26.jpg'
import image27 from '../images/image27.jpg'
import image29 from '../images/image29.jpg'
// import image29 from '../images/image29.jpg'
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const About = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["roboto"].join(","),
      fontWeightLight:600,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          marginTop: '100px',
          marginLeft: 5,
          marginRight: 4,
          
        }}
      >
        <Typography
          variant="h4"
          color="red"
          sx={{ textAlign: "center", marginBottom: 2 }}
        >
          About Us
        </Typography>

        <Typography variant="h6"   sx={{ textAlign: "center"}}>
        Are you in the market for a new set of wheels? Look no further! Our platform offers a vast selection of cars from dealers all over the world, making the car buying process a breeze. Whether you're searching for a sleek sports car, a spacious family SUV, or a reliable work truck, we've got you covered.
Our platform makes it easy for you to find the perfect car for your needs and budget. Browse our inventory and find the car of your dreams, and then visit the seller's profile page to get all the necessary details about the seller and their location.
We partner with a diverse range of sellers, from major corporate car companies to small, local businesses, ensuring that you have access to a wide variety of options.
Don't waste your time and energy scouring the internet for the perfect car. Let us do the work for you.
     To create your profile and start advertising, visit the <a href="/register">Register page</a>.
For any queries and support, contact <a href="tel:+254797168636">Amschel</a>.

        
       
      
        </Typography>
       
        <Typography variant="h4"  color="red" sx={{ textAlign: "center", marginBottom: 2 }}>
          Brands availabe
        </Typography>
        <Typography variant="h6"   sx={{ textAlign: "center"}}>
         Our platform has a wide variety of car brands including but not limited to;
         Toyota, Mercedez,Lexus,Nissan,Subaru,Mazda, Suzuki etc.
        </Typography>
   <Typography  variant="h6"   sx={{ textAlign: "center"}}>
          <img src={image1} alt="Cars_Logos" height="10%" width="70" />
          <img src={image2} alt="Cars_Logos" height="10%" width="70" />
          <img src={image3} alt="Cars_Logos" height="10%" width="70" />
          <img src={image4} alt="Cars_Logos" height="10%" width="70" />
          <img src={image5} alt="Cars_Logos" height="10%" width="70" />
          <img src={image6} alt="Cars_Logos" height="10%" width="70" />
          <img src={image7} alt="Cars_Logos" height="10%" width="70" />
          <img src={image8} alt="Cars_Logos" height="10%" width="70" />
          <img src={image9} alt="Cars_Logos" height="10%" width="70" />
          <img src={image10} alt="Cars_Logos" height="10%" width="70" />
          <img src={image11} alt="Cars_Logos" height="10%" width="70" />
          <img src={image12} alt="Cars_Logos" height="10%" width="70" />
          <img src={image13} alt="Cars_Logos" height="10%" width="70" />
          <img src={image14} alt="Cars_Logos" height="10%" width="70" />
          <img src={image15} alt="Cars_Logos" height="10%" width="70" />
          <img src={image16} alt="Cars_Logos" height="10%" width="70" />
          <img src={image17} alt="Cars_Logos" height="10%" width="70" />
          <img src={image18} alt="Cars_Logos" height="10%" width="70" />
          <img src={image19} alt="Cars_Logos" height="10%" width="70" />
          <img src={image20} alt="Cars_Logos" height="10%" width="70" />
          <img src={image21} alt="Cars_Logos" height="10%" width="70" />
          <img src={image22} alt="Cars_Logos" height="10%" width="70" />
          <img src={image23} alt="Cars_Logos" height="10%" width="70" />
          <img src={image24} alt="Cars_Logos" height="10%" width="70" />
          <img src={image25} alt="Cars_Logos" height="10%" width="70" />
          <img src={image26} alt="Cars_Logos" height="10%" width="70" />
          <img src={image27} alt="Cars_Logos" height="10%" width="70" />
          <img src={image29} alt="Cars_Logos" height="10%" width="70" />
    </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default About;

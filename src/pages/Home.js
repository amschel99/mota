import { Button,Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import CarsSection from '../components/CarsSection/CarsSection';
import { type } from "../features/sort.js";
import { useDispatch } from "react-redux";
import HomeBanner from '../components/Homepage/HomeBanner';
//Disabled reviews
// import ReviewSection from '../components/Homepage/ReviewSection';
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

const Home = () => {
      const dispatch = useDispatch();
     
    return (
        <div>
            {/* home banner */}
            <Box>
                <HomeBanner />
            </Box>
            <Box sx={{marginTop:'10px'}}>
                <Typography   variant="h4"
          color="red"
          sx={{ textAlign: "center", marginBottom: 2 }}>Sort Car By Brand</Typography>

                 <Typography  variant="h6"   sx={{ textAlign: "center"}}>

                    <Typography component={Button} 
                    
                    onClick={() => {
                      
                  return dispatch(type({ type: 'Porsche' }));
                }}
                    >
<img src={image1} alt="Cars_Logos" height="10%" width="70" />
                    </Typography>
                     <Typography component={Button} 
                      
                    onClick={() => {
                            
                  return dispatch(type({ type: 'Renault' }));
                }}
                    >
<img src={image2} alt="Cars_Logos" height="10%" width="70" />
                    </Typography>

                     <Typography component={Button} 
                    
                    onClick={() => {
                      
                  return dispatch(type({ type: 'Saab' }));
                }}
                    >
                         <img src={image3} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    
                    onClick={() => {
                      
                  return dispatch(type({ type: 'Subaru' }));
                }}
                    >
                         <img src={image4} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Suzuki' }));
                }}
                    >
                      <img src={image5} alt="Cars_Logos" height="10%" width="70" />    

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Tata' }));
                }}
                    >
                     <img src={image6} alt="Cars_Logos" height="10%" width="70" />    

                    </Typography>


                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Toyota' }));
                }}
                    >
                      <img src={image7} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography  component={Button} 
                    onClick={() => {

                  return dispatch(type({ type: 'Volvo' }));
                }}
                    >
                      <img src={image8} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Audi' }));
                }}
                    >
                        <img src={image9} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Bmw' }));
                }}
                    >
                      <img src={image10} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>


                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Chevrolet' }));
                }}
                    >
                    <img src={image11} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>


                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Hino' }));
                }}
                    >
                    <img src={image12} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Honda' }));
                }}
                    >
                   <img src={image13} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>


                      <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Hyundai' }));
                }}
                    >
                   <img src={image14} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>


                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Infiniti' }));
                }}
                    >
                   <img src={image15} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Isuzu' }));
                }}
                    >
                   <img src={image16} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Jaguar' }));
                }}
                    >
                   <img src={image17} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Jeep' }));
                }}
                    >
                   <img src={image18} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'LandRover' }));
                }}
                    >
                   <img src={image19} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Lexus' }));
                }}
                    >
                   <img src={image20} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>


                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Man' }));
                }}
                    >
                   <img src={image21} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mazda' }));
                }}
                    >
                   <img src={image22} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mercedez-Amg' }));
                }}
                    >
                   <img src={image23} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                      <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mercedez-Benz' }));
                }}
                    >
                   <img src={image24} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mini' }));
                }}
                    >
                   <img src={image25} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>
                    
                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mitsubishi' }));
                }}
                    >
                   <img src={image26} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>


                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Nissan' }));
                }}
                    >
                   <img src={image27} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>

                      <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Peugeot' }));
                }}
                    >
                   <img src={image29} alt="Cars_Logos" height="10%" width="70" />

                    </Typography>









                    
          
          
          
          
         
          
         
          
          
          
        
          
          
          
          
          
          
    </Typography>
            </Box>

        
        
            {/* offers section */}
            <section>
                <CarsSection   dataAmount={50} />
                <Box sx={{ textAlign: 'center', my: 6 }}>
                    <NavLink to="/cars"
                        style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="primary"
                            sx={{
                                px: 4, py: 1.5, fontSize: '20px',
                                borderRadius: '5px'
                            }}
                        >View More</Button></NavLink>
                </Box>
               
            </section>

            <Box sx={{ background: 'url(/images/homepage/review-back.jpg) no-repeat fixed center center', backgroundSize: 'cover' }}>
                {/* <ReviewSection /> */}
            </Box>
        </div>
    );
};

export default Home;
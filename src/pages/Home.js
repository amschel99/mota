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
        <div style={{fontSize:'10px'}}>
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
                      <div style={{display:'flex',flexDirection:'column'}}>
<img src={image1} alt="Cars_Logos" height="10%" width="70" />
<div style={{fontSize:'10px'}}>Porsche</div>
</div>
                    </Typography>
                     <Typography component={Button} 
                      
                    onClick={() => {
                            
                  return dispatch(type({ type: 'Renault' }));
                }}
                    >
                        <div style={{display:'flex',flexDirection:'column'}}>
<img src={image2} alt="Cars_Logos" height="10%" width="70" />
<div style={{fontSize:'10px'}}>Renault</div>
</div>
                    </Typography>

                     <Typography component={Button} 
                    
                    onClick={() => {
                      
                  return dispatch(type({ type: 'Saab' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>  <img src={image3} alt="Cars_Logos" height="10%" width="70" />
                       <div style={{fontSize:'10px'}}>Saab</div>
                       </div>
                       

                    </Typography>

                     <Typography component={Button} 
                    
                    onClick={() => {
                      
                  return dispatch(type({ type: 'Subaru' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}> <img src={image4} alt="Cars_Logos" height="10%" width="70" />
                       <div style={{fontSize:'10px'}}>Subaru</div>
                       </div>

                         

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Suzuki' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
  <img src={image5} alt="Cars_Logos" height="10%" width="70" /> 
  <div style={{fontSize:'10px'}}>Suzuki</div>
                         </div>
                       

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Tata' }));
                }}
                    >
                        <div style={{display:'flex',flexDirection:'column'}}>

                            <img src={image6} alt="Cars_Logos" height="10%" width="70" />  
                            <div style={{fontSize:'10px'}}>Tata</div>
                        </div>
                     

                    </Typography>


                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Toyota' }));
                }}
                    >
                           <div style={{display:'flex',flexDirection:'column'}}>
        <img src={image7} alt="Cars_Logos" height="10%" width="70" />
        <div style={{fontSize:'10px'}}>Toyota</div>
                           </div>
              

                    </Typography>

                     <Typography  component={Button} 
                    onClick={() => {

                  return dispatch(type({ type: 'Volvo' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
  <img src={image8} alt="Cars_Logos" height="10%" width="70" />
  <div style={{fontSize:'10px'}}> Volvo</div>
                       </div>
                    

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Audi' }));
                }}
                    >
                        <div style={{display:'flex',flexDirection:'column'}}>
 <img src={image9} alt="Cars_Logos" height="10%" width="70" />
 <div style={{fontSize:'10px'}}>Audi</div>
                        </div>
                       

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Bmw' }));
                }}
                    >
                      <div style={{display:'flex',flexDirection:'column'}}>
<img src={image10} alt="Cars_Logos" height="10%" width="70" />
<div style={{fontSize:'10px'}}>Bmw</div>
                      </div>
                      

                    </Typography>


                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Chevrolet' }));
                }}
                    >
                     <div style={{display:'flex',flexDirection:'column'}}>
 <img src={image11} alt="Cars_Logos" height="10%" width="70" />
 <div style={{fontSize:'10px'}}>Chevrolet</div>
                      </div> 
                   

                    </Typography>


                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Hino' }));
                }}
                    >
                      <div style={{display:'flex',flexDirection:'column'}}>
      <img src={image12} alt="Cars_Logos" height="10%" width="70" />
      <div style={{fontSize:'10px'}}>Hino</div>
                      </div>
                      
              

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Honda' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
       <img src={image13} alt="Cars_Logos" height="10%" width="70" />
       <div style={{fontSize:'10px'}}>Honda</div>
                       </div>
            

                    </Typography>


                      <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Hyundai' }));
                }}
                    >
                      <div style={{display:'flex',flexDirection:'column'}}>
   <img src={image14} alt="Cars_Logos" height="10%" width="70" />
<div style={{fontSize:'10px'}}>Hyundai</div>
                      </div>
                
                    </Typography>


                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Infiniti' }));
                }}
                    >
                      <div style={{display:'flex',flexDirection:'column'}}><img src={image15} alt="Cars_Logos" height="10%" width="70" />
                      <div style={{fontSize:'10px'}}>Infiniti</div>
                        </div>
                   

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Isuzu' }));
                }}
                    >
                        <div style={{display:'flex',flexDirection:'column'}}>    <img src={image16} alt="Cars_Logos" height="10%" width="70" />
                        
                        <div style={{fontSize:'10px'}}>Isuzu</div>
                        </div>
               

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Jaguar' }));
                }}
                    >
                          <div style={{display:'flex',flexDirection:'column'}}>

      <img src={image17} alt="Cars_Logos" height="10%" width="70" />
      <div style={{fontSize:'10px'}}>Jaguar</div>
                          </div>

             

                    </Typography>

                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Jeep' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
  <img src={image18} alt="Cars_Logos" height="10%" width="70" />
  <div style={{fontSize:'10px'}}>Jeep</div>
                       </div>
                 

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'LandRover' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
  <img src={image19} alt="Cars_Logos" height="10%" width="70" />
  <div style={{fontSize:'10px'}}>Land Rover</div>
                       </div>
                 

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Lexus' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
<img src={image20} alt="Cars_Logos" height="10%" width="70" />
<div style={{fontSize:'10px'}}>Lexus </div>
                       </div>
                   

                    </Typography>


                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Man' }));
                }}
                    >
                          <div style={{display:'flex',flexDirection:'column'}}>
  <img src={image21} alt="Cars_Logos" height="10%" width="70" />
  <div style={{fontSize:'10px'}}>Man</div>
                          </div>
                 

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mazda' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
    <img src={image22} alt="Cars_Logos" height="10%" width="70" />
    <div style={{fontSize:'10px'}}>Mazda</div>

                       </div>
               

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mercedez-Amg' }));
                }}
                    >
                      <div style={{display:'flex',flexDirection:'column'}}>

     <img src={image23} alt="Cars_Logos" height="10%" width="70" />
     <div style={{fontSize:'10px'}}>Mercedez-Amg</div>
                      </div>
              

                    </Typography>

                      <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mercedez-Benz' }));
                }}
                    >
                      <div style={{display:'flex',flexDirection:'column'}}>

  <img src={image24} alt="Cars_Logos" height="10%" width="70" />
  <div style={{fontSize:'10px'}}>Mercedez-Benz</div>
                      </div>
                 

                    </Typography>

                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mini' }));
                }}
                    >
                        <div style={{display:'flex',flexDirection:'column'}}>
    <img src={image25} alt="Cars_Logos" height="10%" width="70" />
    <div style={{fontSize:'10px'}}>Mini</div>
                        </div>
               

                    </Typography>
                    
                     <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Mitsubishi' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>
   <img src={image26} alt="Cars_Logos" height="10%" width="70" />
   <div style={{fontSize:'10px'}}>Mitsubishi</div>

                       </div>
                

                    </Typography>


                    <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Nissan' }));
                }}
                    >
                            <div style={{display:'flex',flexDirection:'column'}}>
<img src={image27} alt="Cars_Logos" height="10%" width="70" />
<div style={{fontSize:'10px'}}>Nissan</div>

                            </div>
                   

                    </Typography>

                      <Typography component={Button} 
                    onClick={() => {
                  return dispatch(type({ type: 'Peugeot' }));
                }}
                    >
                       <div style={{display:'flex',flexDirection:'column'}}>

                        <div style={{fontSize:'10px'}}>Peugot</div>
                       </div>
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
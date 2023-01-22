import { Button,Alert, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material';
import { Box, styled } from '@mui/system';
import axios from 'axios';
import React from 'react';
import {getStorage} from "firebase/storage"
import { uploadBlob } from '../../../utils/azure'; 
import useAuth from "../AdminParts/../../../others/useAuthContext"

import LoadingSpinner from '../../Common/LoadingSpinner/LoadingSpinner';
import { async } from 'regenerator-runtime';


// styled component for font awesome icon
const Icon = styled('i')(({ theme }) => ({
    color: '#00000099',
    fontSize: '22px', margin: '5px 10px 5px 0'
}));





const AddNewCar = ({ setProcessStatus }) => {
   const[filesEnough,setFilesEnough]=React.useState(false)
    const[status,setStatus]=React.useState("")
const [azureStatus, setAzureStatus]=React.useState("")
  const {currentUser}=useAuth()
 
 const buttonRef=React.useRef()

 
   

    const [values, setValues] = React.useState({}) // form values state
    const [carType, setCarType] = React.useState('')
    const [urls, setUrls]=React.useState([])
    const[user,setUser]=React.useState(currentUser.email)


   const[largeImage,setLargeImage]=React.useState("")
  const[message,setMessage]=React.useState("")
     // form car type state
    const [fuel, setFuel] = React.useState("") // form fuel type state
    // handle changing value in form
const[userName,setUserName]=React.useState("")



    
      React.useEffect(()=>{
        console.log(currentUser.email)
        const getUser= async ()=>{
  try{
    
const {data}= await axios.post(`https://milesmotors.onrender.com/auth/login`,{
  email:currentUser.email
})

console.log( "this is"+data)
setUserName(data.name)



  }

  catch(e){
return null
  }
 }
 getUser()
setUser(currentUser.email)
    },[currentUser.email])
    const handleValueChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    }
    // add new car in database
    async function uploadFiles(files) {
        try {
            if(files){
            const {data}= await axios.post('https://motaautomobiles.azurewebsites.net/api/upload',JSON.stringify({files}))
            }
            if(!files){
                return alert("files object is empty")
            }
          return data;
        } catch (e) {
            console.log(e);
        }
    }
  
    const handleSubmit =  (event) => {

        const newCarInfo = { ...values, carType, fuel,user,carImg:urls[0],image2:urls[1],image3:urls[2],image4:urls[3],image5:urls[4]}
 //buttonRef.current.setAttribute("disabled",true)
  setMessage("adding car ....")
 axios.post('https://milesmotors.onrender.com/car', newCarInfo)
         .then(({ data }) => {
                if (data.code===1) {
                    setMessage('')
                    //buttonRef.current.setAttribute("disabled",false)
                 
                  setStatus(`car added succesfully`)
                  // showSnackbar()
                    event.target.reset()
                }
            })
            .catch(err => {
          setStatus(`${err}`)
               // showSnackbar() // show notification popup containing status
            })
        event.preventDefault()
    }
    return (
      
 <Box >
           
            
             
                      {userName ?<Typography sx={{marginTop:{xs:'100px',sm:'100px'}}} variant="h6" align="center" color="black" >{` Welcome ${userName}`}</Typography>:null}
                        
                       

                    
                                  

                                  
           {userName ? <Typography variant="h6" align="center" color="black" fontWeight="bold">Add New Car In Shop</Typography>: <Typography variant="h6" align="center" color="black" fontWeight="bold">Just a moment ...</Typography>}
            <Box maxWidth="sm" sx={{ my: 4, mx: 'auto' }}>

                {/* new car information form */}
             {userName ? <form onSubmit={handleSubmit}>
                    <Grid container rowSpacing={3.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            {/* car name */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-file-signature"></Icon>
                                <TextField fullWidth label="Car Name"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('carName')} />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            {/* car body color */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-palette"></Icon>
                                <TextField fullWidth label="Body Color"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('color')} />
                            </Box>
                        </Grid>
                         <Grid item xs={6} md={4}>
                            {/* car body color */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-palette"></Icon>
                                <TextField fullWidth label="Unique ID"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('carID')} />
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            {/* car type selector */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-car"></Icon>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel>Car Brand</InputLabel>
                                    <Select fullWidth required
                                        value={carType}
                                        onChange={(e) => setCarType(e.target.value)}
                                    >
                                        <MenuItem value={'Toyota'}>Toyota</MenuItem>
                                        <MenuItem value={'Subaru'}>Subaru</MenuItem>
                                        <MenuItem value={'Audi'}>Audi</MenuItem>
                                        <MenuItem value={'Mazda'}>Mazda</MenuItem>
                                        <MenuItem value={'Ford'}>Ford</MenuItem>
                                           <MenuItem value={'Nissan'}>Nissan</MenuItem>
                                            <MenuItem value={'Suzuki'}>Suzuki</MenuItem>
                                            <MenuItem value={"Volkswagen"}>Volks Wagen</MenuItem>
                                            <MenuItem value={"Honda"}>Honda</MenuItem>
                                             <MenuItem value={"Mitsubishi"}>Mitsubishi</MenuItem>
                                             <MenuItem value={"Porsche"}>Porsche</MenuItem>
                                             <MenuItem value={"Renault"}>Renault</MenuItem>
                                              <MenuItem value={"Saab"}>Saab</MenuItem>

                                            <MenuItem value={"Tata"}>Tata</MenuItem>
                                             <MenuItem value={"Volvo"}>Volvo</MenuItem>
                                             <MenuItem value={"Bmw"}>BMW</MenuItem>
<MenuItem value={"Chevrolet"}>Chevrolet</MenuItem>
  <MenuItem value={"Hino"}>Hino</MenuItem>

  <MenuItem value={"Hyundai"}>Hyundai</MenuItem>
    <MenuItem value={"Infiniti"}>Infiniti</MenuItem>
       <MenuItem value={"Isuzu"}>Isuzu</MenuItem>
          <MenuItem value={"Jaguar"}>Jaguar</MenuItem>
           <MenuItem value={"Jeep"}>Jeep</MenuItem>
            <MenuItem value={"LandRover"}>LandRover</MenuItem>

            <MenuItem value={"Lexus"}>Lexus</MenuItem>
            <MenuItem value={"Man"}>Man</MenuItem>
            <MenuItem value={"Mercedez-Amg"}>Mercedez Amg</MenuItem>
             <MenuItem value={"Mercedez-Benz"}>Mercedez Benz</MenuItem>
             <MenuItem value={"Mini"}>Mini</MenuItem>
<MenuItem value={"Peugeot"}>Peugeot</MenuItem>

                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            {/* car mileage input */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-road"></Icon>
                                <TextField fullWidth required label="Mileage"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">km</InputAdornment>,
                                    }}
                                    variant="standard" type="number"
                                    onChange={handleValueChange('mileage')}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* car transmission status */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-tachometer-alt"></Icon>
                                <TextField fullWidth label="Transmission"
                                    variant="standard" required text="text"
                                    onChange={handleValueChange('transmission')} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {/* car engine info */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-cogs"></Icon>
                                <TextField fullWidth label="Engine"
                                    variant="standard" required type="text"
                                    onChange={handleValueChange('engine')} />
                            </Box>
                        </Grid>
                        <Grid item xs={5} md={4}>
                            {/* car fuel type input */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-gas-pump"></Icon>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel>Fuel</InputLabel>
                                    <Select fullWidth required
                                        value={fuel}
                                        onChange={(e) => setFuel(e.target.value)}
                                    >
                                        <MenuItem value={'gasoline'}>Gasoline</MenuItem>
                                        <MenuItem value={'diesel'}>Diesel</MenuItem>
                                        <MenuItem value={'bio-diesel'}>Bio-Diesel</MenuItem>
                                        <MenuItem value={'ethanol'}>Ethanol</MenuItem>
                                        <MenuItem value={'petrol'}>Petrol</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={7} md={8}>
                            {/* car price in us dollar */}
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Icon className="fas fa-dollar-sign"></Icon>
                                <TextField fullWidth label="Price"
                                    variant="standard" required type="number"
                                    onChange={handleValueChange('price')} />
                            </Box>
                        </Grid>
                       
                       
                       
                        <Grid item xs={12}>

<Grid item xs={12}>
                            {/* car image url */}
                            
                        </Grid>
                       

                            {/* car description textarea */}
                            <TextField fullWidth multiline
                                rows={4} sx={{ my: 2 }}
                                label="Description" variant="outlined"
                                type="text" required
                                onChange={handleValueChange('description')} />
                        </Grid>
                         <Grid item xs={12} sx={{ textAlign: 'right' }}>
                         <label for="images">Choose upto 5 pictures</label>
                            <input type="file" multiple required name="images" id="images" accept='image/png, image/jpeg'
                         onChange={async (e) => {
                           
                         const response=  await uploadFiles(e.target?.files)
                         e.preventDefault()
                         return setUrls(response)
                         }}
                            />
                          
                        </Grid>

                        <Grid item xs={12} sx={{ textAlign: 'right' }}>
                            <Button ref={buttonRef} disabled={urls.length===0}  type="submit" variant="outlined"
                                >Add to Database</Button>
                           <div>{message}</div>
                          {azureStatus && <Alert severity="success">{azureStatus}</Alert>}
                                {urls.length<5 &&<Alert severity="error" >Please choose upto 5 photos</Alert>}
                             
                                {status && <Alert severity="success">{status}</Alert>}
                               
                        </Grid>

                        
                        


                    </Grid>
                </form>:<div style={{marginTop:'200px',marginLeft:'100px'}}> <LoadingSpinner/></div>}
            </Box>

           

            </Box>

       
      
    );
      
};

export default AddNewCar;




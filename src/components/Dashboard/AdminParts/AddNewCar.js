import { Button,Alert, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material';
import { Box, styled } from '@mui/system';
import axios from 'axios';
import React from 'react';

import useAuth from "../AdminParts/../../../others/useAuthContext"

import LoadingSpinner from '../../Common/LoadingSpinner/LoadingSpinner';


// styled component for font awesome icon
const Icon = styled('i')(({ theme }) => ({
    color: '#00000099',
    fontSize: '22px', margin: '5px 10px 5px 0'
}));


const AddNewCar = ({ setProcessStatus }) => {
   const[filesEnough,setFilesEnough]=React.useState(false)
    const[status,setStatus]=React.useState("")

  const {currentUser}=useAuth()
 
  const inputRef=React.useRef()

 
   

    const [values, setValues] = React.useState({}) // form values state
    const [carType, setCarType] = React.useState('')
    const[user,setUser]=React.useState(currentUser.email)
    const[carImg,setCarImage]=React.useState()
     const[image2,setImage2]=React.useState()
     const[image3,setImage3]=React.useState()
     const[image4,setImage4]=React.useState()
     const[image5,setImage5]=React.useState()
   
     // form car type state
    const [fuel, setFuel] = React.useState('') // form fuel type state
    // handle changing value in form
const[userName,setUserName]=React.useState('')



    
      React.useEffect(()=>{
        const getUser= async ()=>{
  try{
const {data}= await axios.post(`https://milesmotors.onrender.com/auth/login`,{
  email:currentUser.email
})


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
  
    const handleSubmit = (event) => {

        const newCarInfo = { ...values, carType, fuel,user,carImg,image2,image3,image4,image5}

        axios.post('https://milesmotors.onrender.com/car', newCarInfo)
            .then(({ data }) => {
                if (data.code===1) {
                  setStatus(`car added succesfully`)
                  // showSnackbar()
                    event.target.reset()
                }
            })
            .catch(err => {
          setStatus(`car not added, there was an error`)
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
                                           <MenuItem value={'Nissan'}>Ford</MenuItem>
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
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <label for="files">Choose A minimum of 5 photos</label>
                              <input id="files" ref={inputRef} type="file" multiple="multiple" accept="image/*" 
                              onChange={(e)=>{
                                const files=e.target?.files
                              

    
    if(files){
if(files.length>5){
setFilesEnough(true)
}

   
for(let i=0;i<files.length;i++){
     let reader=new FileReader()
    reader.readAsDataURL(files[i])
    
   reader.onload= function (readerEvent){
  
  const data=readerEvent.target.result
//do sth with this data e.g store it in a database
if(i===0){
  return setCarImage(data)
}
if(i===1){
 return  setImage2(data)
}
if(i===2){
 return  setImage3(data)
}
if(i===3){
  return setImage4(data)
}
if(i===4){
   return setImage5(data)
}
    
   }
  
}
    }
                              }}
                              />
                            </Box>
                        </Grid>
                       

                            {/* car description textarea */}
                            <TextField fullWidth multiline
                                rows={4} sx={{ my: 2 }}
                                label="Description" variant="outlined"
                                type="text" required
                                onChange={handleValueChange('description')} />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'right' }}>
                            <Button disabled={filesEnough} type="submit" variant="outlined"
                                >Add to Database</Button>
                                {!filesEnough &&<Alert severity="error" >Please choose upto 5 photos</Alert>}
                                {status && <Alert severity="success">{status}</Alert>}
                               
                        </Grid>

                        
                        


                    </Grid>
                </form>: <LoadingSpinner/>}
            </Box>

            </Box>

       
      
    );
      
};

export default AddNewCar;
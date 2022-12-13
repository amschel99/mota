import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import TextArea from '@mui/material/TextareaAutosize';
import {useRef} from "react"
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {useHistory} from 'react-router-dom'
import axios from 'axios'

const theme = createTheme();

export default function Update({name,location,mobile,description,facebook,twitter,instagram}) {
  const history=useHistory();
    const[error,setError]=React.useState('')
    const[loading,setLoading]=React.useState(false)
    const [user,setUser]=React.useState('')
  

    const PHONE_REGEX= /^\+(?:[0-9] ?){6,14}[0-9]$/;

    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

   
     const nameRef=useRef();
   
      const locationRef=useRef();
        const mobileRef=useRef();
         const descriptionRef=useRef();
        const facebookRef=useRef();
          const twitterRef=useRef();
            const instagramRef=useRef();
   
 async  function handleSubmit(e){
        e.preventDefault()
const v1 = PHONE_REGEX.test(mobileRef.current.value);
     
        if (!v1 ) {
            setError("Your mobile number should valid  include a country code ");
            return;
        }
       

        
    try{
        setError('')
        setLoading(true)

 const {data}= await axios.post(`https://milesmotors.onrender.com/auth/register`,{
 
name:nameRef.current.value,
location:locationRef.current.value,
mobile:mobileRef.current.value,
description:descriptionRef.current.value,
facebook:facebookRef.current.value,
twitter:twitterRef.current.value,
instagram:instagramRef.current.value






 })

setUser(`${JSON.stringify(data)}`)
 

 await
 history.push('/profile')
    }
    catch(error){
setError(`failed to Update Profile!${error}`)
    }
    setLoading(false)
      
    } 
   

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
       Update Profile
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
           {user && <Alert severity="success">{user}</Alert>}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                defaultValue={name}
                  required
                  fullWidth
                  name="name"
                  label="Name"
                  type="text"
                  id="name"
                   inputRef={nameRef}
                  autoComplete="Enter your name"
                />
              </Grid>
                <Grid item xs={12}>
                <TextField
                     defaultValue={location}
                  required
                  fullWidth
                  name="location"
                  label="location"
                  type="text"
                  id="location"
                   inputRef={locationRef}
                  autoComplete="Enter your location"
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                     defaultValue={mobile}
                  required
                  fullWidth
                  name="Mobile"
                  label="Mobile"
                  type="text"
                  id="Mobile"
                   inputRef={mobileRef}
                  autoComplete="Enter your mobile number"
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                     defaultValue={facebook}
                  required
                  fullWidth
                  name="facebook"
                  label="facebook"
                  type="url"
                  id="facebook"
                   inputRef={facebookRef}
                  placeholder='facebook url'
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                     defaultValue={twitter}
                  required
                  fullWidth
                  name="twitter"
                  label="twitter"
                  type="url"
                  id="twitter"
                   inputRef={twitterRef}
                  placeholder='twitter  url'
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                     defaultValue={instagram}
                  required
                  fullWidth
                  name="instagram"
                  label="instagram"
                  type="url"
                  id="instagram"
                   inputRef={instagramRef}
                  placeholder='instagram url'
                />
              </Grid>
               <Grid item xs={12}>
                <TextArea
                     defaultValue={description}
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  id="description"
                  minRows={4}
                  maxRows={4}
                style={{ width: "100%" }}
                  placeholder="enter a brief description about your car dealership business"
                  ref={descriptionRef}
                  autoComplete="describe your company/business"
                />
              </Grid>
              
             
             
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
            Update 
            </Button>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}
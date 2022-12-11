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
import useAuth from "../others/useAuthContext"
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const theme = createTheme();

export default function SignUp() {
  const history=useHistory();
    const[error,setError]=React.useState('')
    const[loading,setLoading]=React.useState(false)
    const [user,setUser]=React.useState('')
    const {signUp}=useAuth()
   
    const emailRef=useRef();
     const nameRef=useRef();
    const passwordRef=useRef();
      const locationRef=useRef();
        const mobileRef=useRef();
         const descriptionRef=useRef();
    const passwordConfirmationRef=useRef();
 async  function handleSubmit(e){
        e.preventDefault()
         if(passwordRef.current.value !== passwordConfirmationRef.current.value){
return setError(`passwords do not match`)
    }
    try{
        setError('')
        setLoading(true)
 await  signUp(emailRef.current.value,passwordRef.current.value)
 const {data}= await axios.post(`https://milesmotors.onrender.com/auth/register`,{
  email:emailRef.current.value,
password:passwordRef.current.value,
name:nameRef.current.value,
location:locationRef.current.value,
mobile:mobileRef.current.value,
description:descriptionRef.current.value





 })

setUser(`${JSON.stringify(data)}`)
 

 await
 history.push('/profile')
    }
    catch(error){
setError(`failed to create an account!${error}`)
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
            Sign up
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
           {user && <Alert severity="success">{user}</Alert>}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
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
                <TextArea
                  required
                  fullWidth
                  name="description"
                  label="Description"
                  type="text"
                  id="description"
                  minRows={4}
                  maxRows={4}
                style={{ width: 250 }}
                  placeholder="enter a brief description about your car dealership business"
                  ref={descriptionRef}
                  autoComplete="describe your company/business"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={emailRef}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                   inputRef={passwordRef}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm_Password"
                  type="password"
                  id="password"
                   inputRef={passwordConfirmationRef}
                  autoComplete="confirm_password"
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
  );
}
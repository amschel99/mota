import { Backdrop, createTheme, ThemeProvider } from "@mui/material";
import { Box, styled } from "@mui/system";
import React,{useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route,useLocation} from "react-router-dom";
import './App.css';
import Navbar from "./components/Common/Navbar/Navbar";
import SignUp from "./components/Signup"
import Paypal from "./pages/Paypal";

import Home from "./pages/Home";
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import Reset from './components/Reset'
import LandingPage from "./pages/landing/Landing";
import CarDetails from "./pages/CarDetails";
import Page404 from "./pages/404";
import Seller from './pages/Seller';
import Navbar3 from './components/Common/Nav3/Navbar3';
import Terms from './pages/Terms/Terms'
import Privacy from './pages/Terms/Privacy'
import Footer from "./components/Common/Footer/Footer";
//import SocialFlow from "./components/Common/socialFlow/socialFlow";

import LoadingSpinner from "./components/Common/LoadingSpinner/LoadingSpinner";
import About from "./pages/About";
import Contact from './pages/Contact';
import Profile from "./pages/Profile"

import Map from './components/Map.js'
// customize mui theme
export const theme = createTheme({
  palette: {
    primary: { main: "#f10000", dark: "#d20000", light: "#ff1a1a" }
  },
  typography: {
    fontFamily: ['Arvo', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '4.5rem',
      },
      '@media (min-width:1400px)': {
        fontSize: '5.5rem',
      }
    },
    h4: {
      fontSize: '1.3rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      }
    }
  }
})

// custom styled component
export const PageHeading = styled('div')(({ theme }) => ({
  fontSize: '25px',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '30px 0',
  [theme.breakpoints.up('md')]: {
    fontSize: '50px'
  },
}));
const ScrollToTop=({children})=>{
  const location=useLocation()
  useEffect(()=>{
window.scrollTo(0,0)
  },[location])
return <>
{children}
</>
}
function App() {
  




  return (
    // customized theme provider
    <ThemeProvider theme={theme}>
      <Backdrop sx={{
        zIndex: 9999, backgroundColor: 'white'
      }} open={false}
        transitionDuration={{ appear: 0, enter: 0, exit: 1000 }}>
        <LoadingSpinner />
      </Backdrop>

        <Router>
          <Box className="App" sx={{ position: 'relative' }}>
       
            <Box sx={{ position: 'relative' }}>
              <ScrollToTop>
              <Switch>
                {/* routes */}
                <Route exact path="/">
                  <>
                     
                        {/* navigation bar */}
                        <LandingPage/>
                  
                   
                  </>
                 
                  
                  </Route>
                  <Route exact path="/home">
                  <>
                       <Navbar   />  
                        {/* navigation bar */}
                  
                   <Home  />
                   <Footer/>
                  </>
                 
                  
                  </Route>
            
                <Route exact path="/about">
                  <>
                  <Navbar3/>
                         <About />
                         <Footer/>
                  </>
       
                  
                  </Route>
                      <Route exact path="/map"><Map/></Route>
                <Route exact path="/contact">
                  <Navbar3/>
                  <Contact/>
                  <Footer/>
                  </Route>
                 

                  
                    
                     <Route exact path="/register">
                      <>
                      <Navbar3/>
                        <SignUp/>
                        <Footer/>
                      </>
                    
                      
                      </Route>
                      <Route exact path="/pay">
                      <>
                      <Navbar3/>
                        <Paypal/>
                        <Footer/>
                      </>
                    
                      
                      </Route>
                        <Route exact path="/login">
                          <>
                          <Navbar3/>
                          <Login/>
                          </>
                          
                          </Route>

                          <Route exact path="/terms">
                            <Terms/>
                          </Route>
                           <Route exact path="/privacy">
                            <Privacy/>
                          </Route>
                          
                          
                           <Route exact path="/reset">
                             <>
                          <Navbar3/>
                          <Reset/>
                          </>
                           </Route>
                
              {/* <PrivateRoute exact path="/profile" component={AddNewCar}/>*/}

              <PrivateRoute exact path="/profile" component={Profile}/>
           

                 

                {/* private routes */}
          
                <Route path="/cars/details/:_id">
                  <>
                  <Navbar   />   {/* navigation bar */}
                  <CarDetails />
                  <Footer/>
                  </>
                  
                  
                  </Route>
                <Route  path="/seller/:userId">
                  <>
                  <Navbar3/>
                  <Seller/>
                  <Footer/>
                  </>
                  
                  
                  </Route>
            
             

                {/* not found page */}
                <Route path="*">

                  <>
                  <Navbar3/>
                  <Page404 />
                  </>
                </Route>
              </Switch>
              </ScrollToTop>
            </Box>

            {/* <SocialFlow/>*/}

            
           
          </Box>
        </Router>
      
    </ThemeProvider>
  );
}

export default App;


import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import basic from './BASIC.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useHistory,Link} from 'react-router-dom'

 
export default function Paypal() {
  const [show, setShow] = useState(false);
 const history=useHistory();
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const initialOptions = {
    "client-id": process.env.REACT_APP_CLIENT_ID,
    currency: "USD",
    intent: "capture",
  };

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Basic",
            amount: {
              value: 0.04,

currency_code: "USD",
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log(data);
      console.log(payer);
      console.log(actions);
      setSuccess(true);
     history.push('/profile')
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    console.log(data);
    console.log(actions);
    setErrorMessage("An Error occured with your payment ");
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
 
 <Card sx={{ width:'100vw', marginTop:'120px'}}>
     <Typography> UPGRADE ACCOUNT AND POST UNLIMITED CARS</Typography>
      <CardContent>
        <Typography gutterBottom variant="p" component="p">
Here are some of the benefits of upgrading your account:
<ul type='disc'>
  <li>Access to detailed analytics: Keep track of how many people are viewing your listings, which ones are getting the most traffic, and more.</li>
  <li>High-quality images: Showcase your vehicles in the best light possible with unlimited image uploads.</li>
  <li>Customizable listings: Personalize each listing with your own descriptions, pricing, and more.</li>
  <li>Search engine optimization (SEO): Improve your visibility on search engines like Google, making it easier for potential buyers to find your listings.</li>
  <li>Customer support: Receive assistance from a dedicated support team to help you with any questions or issues you may have.</li>
  <li>Regular updates: Stay up to date with the latest features and improvements, ensuring your platform remains at the cutting edge.</li>
  <li>WITH THE FREE TRIAL, YOU CAN POST UPTO 3 AUTOMOBILES</li>
</ul>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{
                    backgroundColor: '#2680EB',
  color: 'white',
  fontSize: '10px',
  fontWeight: '300',
  padding: '15px 20px',
  border: 'none',
  display:'block',
  "text-align": 'centre',
  borderRadius: '30px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  outline: 'none',
                   }} onClick={() => setShow(true)} size="small">Pay Now</Button>

  <Button sx={{
              marginLeft:"5px",
                  
  backgroundColor: '#2680EB',
  color: 'white',
  fontSize: '10px',
  fontWeight: '300',
  padding: '15px 20px',
  border: 'none',
  display:'block',
  "text-align": 'centre',
  borderRadius: '30px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  outline: 'none',
                   }} component={Link} to="/profile" size="small">Try For Free</Button>
       
      </CardActions>
    </Card>
     

        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : null}
     
    </PayPalScriptProvider>
  );
}


import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Paypal.css";
import basic from './BASIC.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

 
export default function Paypal() {
  const [show, setShow] = useState(false);
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
              value: 0.080,

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
 
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={basic}
        title="basic"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Post unlimited number of automobiles
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button className="subscribe-btn" onClick={() => setShow(true)} size="small">Paypal</Button>
        <Button size="small">Mpesa</Button>
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
      </div>
    </PayPalScriptProvider>
  );
}

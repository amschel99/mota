import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

 
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
            
             value: '0.080',
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
     console.log(data)
     console.log(payer)
     console.log(actions)
     setSuccess(true);
   });
 };
 //capture likely error
 const onError = (data, actions) => {
    console.log(data)
    console.log(actions)
   setErrorMessage("An Error occured with your payment ");
 };
 return (
   <PayPalScriptProvider
   options={initialOptions}
   >
     <div>
       <div className="wrapper">
         <div className="product-img">
           <img
             src="https://cdn.pixabay.com/photo/2021/08/15/06/54/sunflower-6546993_1280.jpg"
             alt="basic_plan"
             height="420"
             width="327"
           />
         </div>
         <div className="product-info">
           <div className="product-text">
             <h1>Basic plan</h1>
             <h2>Upload upto 70 photos</h2>
             <p>
               Upload upto 70 photos for 2 months
               <br />
               
             </p>
           </div>
 
           <div className="product-price-btn">
             <p>
               <span>$10</span>
             </p>
             <button type="submit" onClick={() => setShow(true)}>
          Subscribe now 
             </button>
           </div>
         </div>
       </div>
 
       {show ? (
         <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
         />
       ) : null}
     </div>
   </PayPalScriptProvider>
 );
}
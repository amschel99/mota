
import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Paypal.css";
import basic from './BASIC.png'

 
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
      <div className="paypal-container">
        <div className="product-box">
          <div className="product-img">
            <img
              src=`${basic}`
              alt="basic_plan"
              height="200"
              width="200"
            />
          </div>
          <div className="product-info">
            <h1 className="product-title">Basic plan</h1>
            <h2 className="product-subtitle">Upload upto 70 photos</h2>
            <p className="product-description">
              Upload upto 70 photos for 2 months
            </p>
            <div className="product-price-btn">
              <p className="product-price">$10</p>
              <button type="submit" className="subscribe-btn" onClick={() => setShow(true)}>
                Pay Now
              </button>
            </div>
          </div>
        </div>

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

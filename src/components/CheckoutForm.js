import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import DatePicker from "react-datepicker";  
  
import "react-datepicker/dist/react-datepicker.css";  
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(BookContext);

  const [orderDetails, setOrderDetails] = useState({ cart, total, address: null,phoneNum:null, PickUpDate:null,DeliverDate:null,token: null });
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(moment().startOf("isoweek").utc()),
    endDate: new Date(moment().endOf("week").utc())
});  
const [startDate, setStartDate] = useState(null);

const filterPassedTime = (time) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);

  return currentDate.getTime() < selectedDate.getTime();
};
  const [deliverOption,setDeliverOption] = useState(null);
console.log(startDate)

useEffect(() => {
    if (orderDetails.token) {
      checkout(orderDetails);
      clearCart();
      
    }
  }, [orderDetails]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };


  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(orderDetails.DeliverDate==null&&orderDetails.PickUpDate==null){
      setError("You need to choose a Pick Up time or Delivery time");
      return;
    }
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
      return;
    } else {
      setError(null);
      // Send the token to your server.
      const token = result.token;
      setOrderDetails({ ...orderDetails, token: token.id });
      console.log(orderDetails)
      history.push('/')
    }

  };
  const twoCalls = (e)=> {
    setDateRange({ ...dateRange, startDate: e })
    setOrderDetails({ ...orderDetails, DeliverDate: e.getDate()+"/"+e.getMonth()+"/"+e.getFullYear() })

  }
  const TwoCallsForPU = (e)=> {
    setStartDate(e)
    setOrderDetails({ ...orderDetails, PickUpDate: e.getDate()+"/"+e.getMonth()+"/"+e.getFullYear()+"Time="+e.getHours()+":"+e.getMinutes()  })

  }

  const loadPickUpTime =()=> {
    setDeliverOption("pickup")
    setOrderDetails({ ...orderDetails, DeliverDate:null  })

    
  }
  const loadDeliver =()=> {
    setDeliverOption("deliver")
    setOrderDetails({ ...orderDetails, PickUpDate:null  })

  }
  console.log(orderDetails)
  console.log(deliverOption)
  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        <label htmlFor="checkout-address">Shipping Address</label>
        <input
          id="checkout-address"
          type="text"
          onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
        />
        <div className="stripe-section">
          <label htmlFor="stripe-element"> Credit or debit card </label>
          <CardElement id="stripe-element" options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
        </div>
        <label htmlFor="phone-number">Phone Number</label>
        <input
          id="phone-number"
          type="number" required
          onChange={(e) => setOrderDetails({ ...orderDetails, phoneNum: e.target.value })
          }
        />
        <br/>
        <label htmlFor="choose">Would you like to pick up or deliver</label>
      <button type="button" onClick={() =>loadPickUpTime()}>
        Pick Up
      </button>
      <button type="button" onClick={() =>loadDeliver()}>
        Delivery
      </button>
      {(() => {
        if (deliverOption===null) {
          return (
            null
          )
        } else if (deliverOption==="pickup") {
          return (
            <div>
            <h1>Pick Time</h1>
            <h3>Monday-Sunday 10:30-5:30</h3>
            <p>Please pick a day:</p>
      <DatePicker
      
      showTimeSelect
      selected={startDate}
      onChange={(date) => TwoCallsForPU(date)}
      placeholderText="Select a time"
    />
            </div>
          )
        } else if(deliverOption==="deliver"){
          return (
            <div>
                      <label htmlFor="date">Date</label>
    <div>
      <p>Please pick a day:</p>
      <DatePicker
      
      selected={new Date(dateRange.startDate)}
      onChange={(date) => twoCalls(date)}
      name="startDate"
      filterDate={(date) => date.getDay() === 0||date.getDay() ===6}
      placeholderText="Select a Monday"
    />
    </div>
            </div>
          )
        }
      })()}




        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>
      <button type="submit" className="btn">
        Submit Payment
      </button>
    </form>
  );
};

export default CheckoutForm;

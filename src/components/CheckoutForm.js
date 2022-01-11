import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import "react-datepicker/dist/react-datepicker.css";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 90vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
`;
const InnerContainer = styled.div`
  width: 960px;
  min-height: auto;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const FormSection = styled.div`
  margin: 10px;
`;
const CardPaymentContainer = styled.div`
  border-radius: 12px;
  border: 1px solid #9c9997;
`;

const CardButtonContainer = styled.div`
  width: 140px;
  border-radius: 12px;
  margin: 10px auto;
`;
const CardPaymentButton = styled.button`
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;

  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #57b846;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  border: none;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;
const TitleContainer = styled.h1`
  font-size: 28px;
  text-align: center;
`;
const CheckoutForm = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(BookContext);

  const [orderDetails, setOrderDetails] = useState({
    cart,
    total,
    address: null,
    phoneNum: null,
    PickUpDate: null,
    DeliverDate: null,
    token: null,
  });
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const [dateRange, setDateRange] = useState({
    startDate: new Date(moment().startOf("isoweek").utc()),
    endDate: new Date(moment().endOf("week").utc()),
  });
  const [startDate, setStartDate] = useState(null);

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };
  const [deliverOption, setDeliverOption] = useState(null);
  console.log(startDate);

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
    if (orderDetails.DeliverDate == null && orderDetails.PickUpDate == null) {
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
      console.log(orderDetails);
      history.push("/");
    }
  };
  const twoCalls = (e) => {
    setDateRange({ ...dateRange, startDate: e });
    setOrderDetails({
      ...orderDetails,
      DeliverDate: e.getDate() + "/" + e.getMonth() + "/" + e.getFullYear(),
    });
  };
  const TwoCallsForPU = (e) => {
    setStartDate(e);
    setOrderDetails({
      ...orderDetails,
      PickUpDate:
        e.getDate() +
        "/" +
        e.getMonth() +
        "/" +
        e.getFullYear() +
        "Time=" +
        e.getHours() +
        ":" +
        e.getMinutes(),
    });
  };

  const loadPickUpTime = () => {
    setDeliverOption("pickup");
    setOrderDetails({ ...orderDetails, DeliverDate: null });
  };
  const loadDeliver = () => {
    setDeliverOption("deliver");
    setOrderDetails({ ...orderDetails, PickUpDate: null });
  };
  console.log(orderDetails);
  console.log(deliverOption);
  return (
    <FormContainer>
      <InnerContainer>
        <form onSubmit={handleSubmit}>
          <div>
            {" "}
            <div>
              <TitleContainer>Customer Info and Payments</TitleContainer>

              <NameContainer>
                <FormSection>
                  <label for="firstName" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    placeholder=""
                    required
                    onChange={(e) =>
                      setOrderDetails({
                        ...orderDetails,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <div class="invalid-feedback">
                    Valid first name is required.
                  </div>
                </FormSection>
                <FormSection>
                  <label for="lastName" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    placeholder=""
                    required
                    onChange={(e) =>
                      setOrderDetails({
                        ...orderDetails,
                        lastName: e.target.value,
                      })
                    }
                  />
                  <div class="invalid-feedback">
                    Valid last name is required.
                  </div>
                </FormSection>
              </NameContainer>
              <FormSection>
                <span class="text-muted" style={{ fontSize: "12px" }}>
                  We only provide 15KM free delivery service from Carlton
                  Victoria at the moment
                  <br /> DM in instagram Or Facebook for people that over 15KM
                </span>
              </FormSection>

              <FormSection>
                <label for="address" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  required
                  onChange={(e) =>
                    setOrderDetails({
                      ...orderDetails,
                      address: e.target.value,
                    })
                  }
                />
                <div class="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </FormSection>
              <FormSection>
                <label for="address2" class="form-label">
                  Address 2 <span class="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                  onChange={(e) =>
                    setOrderDetails({
                      ...orderDetails,
                      address2: e.target.value,
                    })
                  }
                />
              </FormSection>
              <FormSection>
                <label for="address2" class="form-label">
                  Suburb
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address2"
                  placeholder="Suburb"
                  required
                  onChange={(e) =>
                    setOrderDetails({
                      ...orderDetails,
                      suburb: e.target.value,
                    })
                  }
                />
              </FormSection>
              <FormSection>
                <label for="zip" class="form-label">
                  Postcode
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder=""
                  required
                  onChange={(e) =>
                    setOrderDetails({
                      ...orderDetails,
                      postcode: e.target.value,
                    })
                  }
                />
                <div class="invalid-feedback">Postcode code required.</div>
              </FormSection>
            </div>
            <FormSection>
              <label htmlFor="phone-number">Phone Number</label>

              <input
                id="phone-number"
                type="tel"
                class="form-control"
                required
                onChange={(e) =>
                  setOrderDetails({
                    ...orderDetails,
                    phoneNum: e.target.value,
                  })
                }
              />
            </FormSection>
            <FormSection>
              <label htmlFor="choose">
                Would you like to pick up or deliver
              </label>
              <button type="button" onClick={() => loadPickUpTime()}>
                Pick Up
              </button>
              <button type="button" onClick={() => loadDeliver()}>
                Delivery
              </button>
              {(() => {
                if (deliverOption === null) {
                  return null;
                } else if (deliverOption === "pickup") {
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
                  );
                } else if (deliverOption === "deliver") {
                  return (
                    <div>
                      <label htmlFor="date">Date</label>
                      <div>
                        <p>Please pick a day:</p>
                        <DatePicker
                          selected={new Date(dateRange.startDate)}
                          onChange={(date) => twoCalls(date)}
                          name="startDate"
                          filterDate={(date) =>
                            date.getDay() === 0 || date.getDay() === 6
                          }
                          placeholderText="Select a Monday"
                        />
                      </div>
                    </div>
                  );
                }
              })()}
            </FormSection>
            <CardPaymentContainer>
              <FormControlLabel
                control={
                  <Switch
                    checked={isChecked}
                    onChange={() => {
                      setIsChecked((prev) => !prev);
                    }}
                  />
                }
                label={
                  <span style={{ textAlign: "center", fontSize: "16px" }}>
                    Card Payment
                  </span>
                }
              />
              <Collapse in={isChecked}>
                <FormSection>
                  <div className="stripe-section">
                    <label htmlFor="stripe-element">
                      {" "}
                      Credit or debit card{" "}
                    </label>
                    <CardElement
                      id="stripe-element"
                      options={CARD_ELEMENT_OPTIONS}
                      onChange={handleChange}
                    />
                  </div>
                </FormSection>
                <CardButtonContainer>
                  <CardPaymentButton type="submit">Pay Now</CardPaymentButton>
                </CardButtonContainer>
              </Collapse>
            </CardPaymentContainer>
            <div className="card-errors" role="alert">
              {error}
            </div>
          </div>
        </form>
      </InnerContainer>
    </FormContainer>
  );
};

export default CheckoutForm;

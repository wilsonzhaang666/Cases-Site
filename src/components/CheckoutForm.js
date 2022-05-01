import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { ProductContext } from "../context/products";
import { v4 as uuidv4 } from "uuid";
import { API, graphqlOperation } from "aws-amplify";
import { processOrder } from "../api/mutations";

import { CartContext } from "../context/cart";
import {
  CardElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
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
const LoadingContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 90vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #ffffff;
`;

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
  margin: 5px;
  margin-left: auto;
  margin-right: auto;
`;
const CardPaymentContainer = styled.div`
  border-radius: 12px;
  border: 1px solid #9c9997;
  padding: 15px;
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

const ContainerForChoosingButtons = styled.div``;
const ChoosingButtons = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 40%;

  :disabled {
    cursor: default;
  }

  :focus {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;

const ContainerForTimePicker = styled.div`
  border-radius: 12px;
  border: 1px solid #9c9997;
  padding: 10px;
  text-align: center;
`;

const SubTitleForTimePicker = styled.span`
  font-weight: light;
  font-size: 18px;
`;
const TextMessage = styled.span`
  font-weight: light;
  font-size: 18px;
`;
const ContainerForpicker = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const ProcessPayment = styled.p`
  display: block;
`;

const CheckoutForm = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { cart, total, clearCart } = useContext(CartContext);
  // const { checkout } = useContext(BookContext);

  useEffect(() => {
    function Addcart() {
      var item = [];
      const thecart = JSON.parse(localStorage.getItem("cart"));
      if (thecart === null) {
        localStorage.setItem("cart", JSON.stringify(item));
      }
    }
    Addcart();
  }, [cart]);
  const [orderDetails, setOrderDetails] = useState({
    cart,
    total,
    address: null,
    phoneNum: null,
    PickUpDate: "",
    DeliverDate: "",
    token: null,
    firstName: null,
    lastName: null,
    address2: "",
    suburb: "",
    postcode: "",
  });
  useEffect(() => {
    if (orderDetails.token) {
      checkout(orderDetails);
    }
  }, [orderDetails]);
  const [localcart, setCart] = useState([]);
  useEffect(() => {
    function loadCart() {
      if (cart.length === 0) {
        const thecart = JSON.parse(localStorage.getItem("cart"));
        setCart(thecart);
        let totalnum = 0;
        for (let i = 0; i < thecart.length; i++) {
          totalnum += thecart[i].price;
        }
        setOrderDetails({ ...orderDetails, cart: thecart, total: totalnum });
      }
    }
    loadCart();
  }, [cart]);

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

  const checkout = async (orderDetails) => {
    setLoading(true);

    const payload = {
      id: uuidv4(),
      ...orderDetails,
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      setLoading(false);

      console.log("Order is successful");
      clearCart();
      history.push("/PaymentSucess");
    } catch (err) {
      console.log(err.errors[0].message);
      console.log(err);

      alert(err.errors[0].message);
      setLoading(false);
    }
  };

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
    setOrderDetails({ ...orderDetails, DeliverDate: "" });
  };
  const loadDeliver = () => {
    setDeliverOption("deliver");
    setOrderDetails({ ...orderDetails, PickUpDate: "" });
  };

  if (loading) {
    return (
      <LoadingContainer>
        <div className="loading-container">
          <ProcessPayment>Proccessing Payment</ProcessPayment>

          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </LoadingContainer>
    );
  }
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
              <ContainerForChoosingButtons>
                {" "}
                <ChoosingButtons type="button" onClick={() => loadPickUpTime()}>
                  Pick Up
                </ChoosingButtons>
                <ChoosingButtons type="button" onClick={() => loadDeliver()}>
                  Delivery
                </ChoosingButtons>
              </ContainerForChoosingButtons>

              {(() => {
                if (deliverOption === null) {
                  return null;
                } else if (deliverOption === "pickup") {
                  return (
                    <ContainerForTimePicker>
                      {" "}
                      <SubTitleForTimePicker>
                        Monday-Sunday 10:30-5:30
                      </SubTitleForTimePicker>{" "}
                      <br />
                      <TextMessage>Please pick a day:</TextMessage>
                      <DatePicker
                        showTimeSelect
                        selected={startDate}
                        onChange={(date) => TwoCallsForPU(date)}
                        placeholderText="Select a time"
                      />
                    </ContainerForTimePicker>
                  );
                } else if (deliverOption === "deliver") {
                  return (
                    <div>
                      <ContainerForTimePicker>
                        <TextMessage>We only deliver at Weekend</TextMessage>
                        <br />

                        <TextMessage>Please pick a time:</TextMessage>
                        <ContainerForpicker>
                          <DatePicker
                            selected={new Date(dateRange.startDate)}
                            onChange={(date) => twoCalls(date)}
                            name="startDate"
                            filterDate={(date) =>
                              date.getDay() === 0 || date.getDay() === 6
                            }
                            placeholderText="Select a Monday"
                          />
                        </ContainerForpicker>
                      </ContainerForTimePicker>
                    </div>
                  );
                }
              })()}
            </FormSection>
            <FormSection>
              <label htmlFor="Policy">
                <input type="checkbox" required />
                <span style={{ padding: "10px" }}>
                  I fully understand the return policy of the products
                </span>
              </label>
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

import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
  withRouter,
} from "react-router-dom";

// Amplify
import Amplify, { API, graphqlOperation } from "aws-amplify";
//backend
import { createPaymentIntent } from "./graphql/mutations";

//Event
import Event from "./EventPage/Event";
//PhoneTypePages

import Iphone11 from "./PhoneTypePages/iphone11";
import Iphone12 from "./PhoneTypePages/iphone12";
import Iphone13 from "./PhoneTypePages/iphone13";
// import AirPod from "./PhoneTypePages/AirPod";
// import AirPodPro from "./PhoneTypePages/AirPodPro";
// Auth
import ForgotPassword from "./Auth/ForgotPassword";
import SignIn from "./Auth/SignIn";
import Register from "./Auth/Register";
import ConfirmSignUp from "./Auth/ConfirmSignUp";
import ConfirmForgotReset from "./Auth/ForgotPasswordReset";
// Pages
import PaymentSuccess from "./components/PaymentSuccess";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
import OrderDetail from "./pages/OrderDetail";
import ProductOrderDetail from "./pages/ProductOrderDetail";
import ContactUs from "./pages/ContactUs";
import DeliveryInfo from "./pages/DeliveryInfo";
// Components
import Header from "./components/Header";

import ReturnPolicy from "./pages/ReturnPolicy";

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = (props) => {
  let loggedStatus = {
    username: undefined,
    isLoggedIn: false,
  };

  return (
    <Router>
      <Header props={loggedStatus} {...props} />
      <Switch>
        <Route path="/PaymentSucess">
          <PaymentSuccess />
        </Route>
        <Route exact path="/confirm">
          <ConfirmSignUp />
        </Route>
        <Route exact path="/confirmforgot">
          <ConfirmForgotReset />
        </Route>
        <Route exact path="/passwordReset">
          <ForgotPassword />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/event">
          <Event />
        </Route>
        {/* <Route exact path="/airpod">
          <AirPod />
        </Route>
        <Route exact path="/airpodpro">
          <AirPodPro />
        </Route> */}
        <Route exact path="/iphone11">
          <Iphone11 />
        </Route>
        <Route exact path="/iphone12">
          <Iphone12 />
        </Route>
        <Route exact path="/iphone13">
          <Iphone13 />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <OrderDetail />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/deliveryinfo">
          <DeliveryInfo />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/returnpolicy">
          <ReturnPolicy />
        </Route>
        <Route exact path="/cases">
          <Products />
        </Route>
        <Route
          path="/cases/:id"
          children={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="/order/:id"
          children={<ProductOrderDetail></ProductOrderDetail>}
        ></Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

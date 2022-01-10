import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";
//Event
import Event from "./EventPage/Event";
//PhoneTypePages

import Iphone11 from "./PhoneTypePages/iphone11";
import Iphone12 from "./PhoneTypePages/iphone12";
import Iphone13 from "./PhoneTypePages/iphone13";
import AirPod from "./PhoneTypePages/AirPod";
import AirPodPro from "./PhoneTypePages/AirPodPro";

// Pages
import SignIn from "./Auth/SignIn";
import Register from "./Auth/Register";
import ConfirmSignUp from "./Auth/ConfirmSignUp";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Admin from "./pages/Admin";
import OrderDetail from "./pages/OrderDetail";
import BookOrderDetail from "./pages/BookOrderDetail";
import ContactUs from "./pages/ContactUs";
import DeliveryInfo from "./pages/DeliveryInfo";
// Components
import Header from "./components/Header";

import ReturnPolicy from "./pages/ReturnPolicy";

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/confirm">
          <ConfirmSignUp />
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
        <Route exact path="/airpod">
          <AirPod />
        </Route>
        <Route exact path="/airpodpro">
          <AirPodPro />
        </Route>
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
          <Books />
        </Route>
        <Route path="/cases/:id" children={<BookDetails></BookDetails>}></Route>
        <Route
          path="/order/:id"
          children={<BookOrderDetail></BookOrderDetail>}
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

import React, { useState, useEffect, useContext } from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import SignIn from "../Auth/SignIn";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { API, graphqlOperation } from "aws-amplify";
import { createPaymentIntent } from "../graphql/mutations";
import { CartContext } from "../context/cart";
const stripePromise = loadStripe(
  "	pk_live_51JmIKpHLMDgfJmh8FvXl6eXgyMNL7xcLL4U6Z1jL0N1h3JZo4P2klIRyxYvRDyUPKeeluDNZAhlFW1ENpmtVhEI100NFSpYj73"
);
const Checkout = () => {
  return (
    <section>
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;

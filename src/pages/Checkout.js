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
  "pk_test_51JmIKpHLMDgfJmh8Q9RedVtOtMGmvI8tky6vwAtdgWyUFmFTO5c461mAHcFp3oEbGM5gnlbpoWbS5DhyyP0jVLam00qTsPszkk"
);
const Checkout = () => {
  // const [clientSecret, setClientSecret] = useState("");
  // const fetchPaymentIntent = async () => {
  //   const response = await API.graphql(
  //     graphqlOperation(createPaymentIntent, { input: paymentPrice })
  //   );
  //   console.log(response);
  //   setClientSecret(response.data.createPaymentIntent.clientSecret);
  // };
  // useEffect(() => {
  //   if (!clientSecret) {
  //     fetchPaymentIntent();
  //   }
  // }, [clientSecret]);

  // console.log(clientSecret);
  // const thekey = clientSecret;
  // const request = ("'" + clientSecret + "'").toString();
  // console.log(request);

  // const options = {
  //   clientSecret,
  // };

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

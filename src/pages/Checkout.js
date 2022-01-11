import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import SignIn from "../Auth/SignIn";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_live_51JmIKpHLMDgfJmh8FvXl6eXgyMNL7xcLL4U6Z1jL0N1h3JZo4P2klIRyxYvRDyUPKeeluDNZAhlFW1ENpmtVhEI100NFSpYj73"
  );
  return (
    <section>
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;

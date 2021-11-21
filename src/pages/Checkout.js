import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('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');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout

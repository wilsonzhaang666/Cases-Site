import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_live_51JmIKpHLMDgfJmh8FvXl6eXgyMNL7xcLL4U6Z1jL0N1h3JZo4P2klIRyxYvRDyUPKeeluDNZAhlFW1ENpmtVhEI100NFSpYj73');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                    <h4 class="mb-3">Billing address</h4>

                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout

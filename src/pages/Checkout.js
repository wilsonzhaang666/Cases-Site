import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51JmIKpHLMDgfJmh8Q9RedVtOtMGmvI8tky6vwAtdgWyUFmFTO5c461mAHcFp3oEbGM5gnlbpoWbS5DhyyP0jVLam00qTsPszkk');

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

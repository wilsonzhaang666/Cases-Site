// const stripe = require("stripe")(
//   "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"
// );

//test key
const stripe = require("stripe")(
  "sk_test_51JmIKpHLMDgfJmh8riUTbAeTEi3uqiAKXonWDpn0K699hDMAv9U9HpAhga8dbSRN2LVjzaVReb8MX3YVaeCAFQyO00VUL1He3Z"
);

exports.handler = async (event) => {
  const { total } = event.arguments.input;

  //   if (!total?.amount) {
  //     throw new Error("Amound argument is required");
  //   }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    //test currency
    currency: "eur",
    //real currency
    // currency: "aud",
    automatic_payment_methods: { enabled: true },
  });
  return { clientSecret: paymentIntent.client_secret };
};

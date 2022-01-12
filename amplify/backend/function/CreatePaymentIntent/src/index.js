const stripe = require("stripe")(
  "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"
);
exports.handler = async (event) => {
  const {
    id,
    cart,
    total,
    address,
    firstName,
    lastName,
    address2,
    suburb,
    postcode,
    phoneNum,
    token,
    DeliverDate,
    PickUpDate,
  } = event.arguments.input;

  //   if (!total?.amount) {
  //     throw new Error("Amound argument is required");
  //   }

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 500,
    currency: "aud",
    automatic_payment_methods: { enabled: true },
  });
  return { clientSecret: paymentIntent.client_secret };
};

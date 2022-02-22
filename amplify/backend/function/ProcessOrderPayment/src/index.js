const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "ap-southeast-2_nWSYfmxen";

const stripe = require("stripe")(
  "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"
);

const getUserEmail = async (event) => {
  const params = {
    UserPoolId: USER_POOL_ID,
    Username: event.identity.claims.username,
  };
  const user = await cognitoIdentityServiceProvider
    .adminGetUser(params)
    .promise();
  const { Value: email } = user.UserAttributes.find((attr) => {
    if (attr.Name === "email") {
      return attr.Value;
    }
  });
  return email;
};

/*
 * Get the total price of the order
 * Charge the customer
 */
exports.handler = async (event) => {
  try {
    const {
      id,
      cart,
      total,
      address,
      phoneNum,
      token,
      DeliverDate,
      PickUpDate,
      firstName,
      lastName,
      address2,
      suburb,
      postcode,
    } = event.arguments.input;
    const { username } = event.identity.claims;
    const email = await getUserEmail(event);

    await stripe.charges.create({
      amount: total * 100,
      currency: "aud",
      source: token,
      description: `Order ${new Date()} by ${username} with ${email} `,
    });
    return {
      id,
      cart,
      total,
      address,
      phoneNum,
      username,
      DeliverDate,
      email,
      PickUpDate,
      firstName,
      lastName,
      address2,
      suburb,
      postcode,
    };
  } catch (err) {
    throw new Error(err);
  }
};

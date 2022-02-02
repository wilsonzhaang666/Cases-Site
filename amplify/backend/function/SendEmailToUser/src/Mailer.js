const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "ap-southeast-2_nWSYfmxen";
const sendgridMail = require("@sendgrid/mail");
//api key for the sendgrid account
const API_KEY =
  "SG.6Qanvb8sTbyAnwO4_ppVUQ.xFBQ3VhV8CV1EaaNK0QQsasYS5zt65VnzAeQ7AK53_8";

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
const getUsername = async (event) => {
  const usernmae = event.identity.claims.username;
  return usernmae;
};
module.exports.run = async (event, context, cb) => {
  const { id, cart, total, address, phoneNum, token, DeliverDate, PickUpDate } =
    event.arguments.input;

  let mailResult;
  sendgridMail.setApiKey(API_KEY);
  const email = await getUserEmail(event);
  const username = await getUsername(event);
  const msg = {
    to: email,
    from: "casessite01@gmail.com",
    templateId: "d-d26f08aeeba74e0fa4554b2dd147910b",
    dynamicTemplateData: {
      subject: "Congratulations! Here is your Invoice",
      name: username,
      email: email,
      id: id,
      cart: cart,
    },
  };

  sendgridMail.send(msg, (error, result) => {
    if (error) {
      mailResult = cb(new Error("MAIL SEND FAILED"));
    }
    mailResult = cb(null, {
      message: "success",
      details: result,
    });
  });
};

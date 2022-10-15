const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "ap-southeast-2_NyDbi23Y2";
const sendgridMail = require("@sendgrid/mail");
//api key for the sendgrid account
const API_KEY =
  "SG.6Qanvb8sTbyAnwO4_ppVUQ.xFBQ3VhV8CV1EaaNK0QQsasYS5zt65VnzAeQ7AK53_8";

c;
const getUsername = async (event) => {
  const usernmae = event.identity.claims.username;
  return usernmae;
};
module.exports.run = async (event, context, cb) => {
  const { customerId } = event.arguments.input;

  let mailResult;
  sendgridMail.setApiKey(API_KEY);
  const email = await getUserEmail(event);
  const username = await getUsername(event);
  const msg = {
    to: customerId,
    from: "casessite01@gmail.com",
    templateId: "d-fb886f13a8384bf5a429bcfc696ee2c3",
    dynamicTemplateData: {
      subject: "We Are Now Processing Your Order",
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

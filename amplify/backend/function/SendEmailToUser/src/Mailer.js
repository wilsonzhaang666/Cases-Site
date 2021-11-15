const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();
const USER_POOL_ID = "ap-southeast-2_nWSYfmxen";
const sendgridMail = require('@sendgrid/mail');

const API_KEY = "SG.6Qanvb8sTbyAnwO4_ppVUQ.xFBQ3VhV8CV1EaaNK0QQsasYS5zt65VnzAeQ7AK53_8";

const getUserEmail = async (event) => {
    const params = {
      UserPoolId: USER_POOL_ID,
      Username: event.identity.claims.username
    };
    const user = await cognitoIdentityServiceProvider.adminGetUser(params).promise();
    const { Value: email } = user.UserAttributes.find((attr) => {
      if (attr.Name === "email") {
        return attr.Value;
      }
    });
    return email;
  };
module.exports.run = async(event, context, cb) => {


const { id, cart, total, address,phoneNum, token,DeliverDate,PickUpDate } = event.arguments.input;

  let mailResult;
  sendgridMail.setApiKey(API_KEY);
  const email = await getUserEmail(event);
  const msg = {
    to:email,
    from: "casessite01@gmail.com",
    subject: "Your Order Is Complete!",
    text:"text Hello",
  html: "<p>Dear Customer </p>"+"<br/>"+"<p>Your Order is Successful </p>"+"<br/>"+
  "<p>Here is Your Order Details:</p>"+"<br/>"+
  "<p>Contact Number</p>"+phoneNum+

  "<p>Address</p>"+address+
  "<p>total</p>"+total+
  "<p> Delivery/Pick Up Time:</p>"+DeliverDate+"/"+PickUpDate

  };
 

  sendgridMail.send(msg, (error, result) => {
    if (error) {
      mailResult = cb(new Error('MAIL SEND FAILED'));
    }
    mailResult = cb(null, {
      message: 'success',
      details: result,
    });
  });

};
// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require("aws-sdk");
var ses = new aws.SES({ region: "ap-southeast-2" });
const sendrequest = async (event) => {
    
    return ses.sendEmail(event).promise();
  };
exports.handler = async (event) => {
    try {
        const { id, cart, total, address,phoneNum, token,DeliverDate,PickUpDate
          ,firstName,lastName,address2,suburb,postcode  } = event.arguments.input;
        const { username } = event.identity.claims;

        var params = {
            Destination: {
              ToAddresses: ["casessite01@gmail.com"],
            },
            Message: {
              Body: {
                Text: { Data: "Hi there,\nThe new Order has accounced\nHere is Your Order Details:\n"
                +"\n firstName:"+firstName+"\n lastName:"+lastName
                +"\n id:"+id
                +"\n Username:"+username
                +"\nContact Number: "+phoneNum
                +"\n Address: "+address
                +"\n Address2: "+address2
                +"\n suburb: "+suburb
                +"\n postcode"+postcode
                +"\n total: "+ total+cart
                +"\n Delivery/Pick Up Time: "+DeliverDate+"/"+PickUpDate},
              },
        
              Subject: { Data: "New Order!" },
            },
            Source: "casessite01@gmail.com",
          };
        await sendrequest(params)
        return "SUCCESS";
      } catch (err) {
        throw new Error(err);
      }

};
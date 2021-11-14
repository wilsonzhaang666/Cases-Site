// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

var aws = require("aws-sdk");
var ses = new aws.SES({ region: "ap-southeast-2" });
const sendrequest = async (event) => {
    
    return ses.sendEmail(event).promise();
  };
exports.handler = async (event) => {
    try {
        const { id, cart, total, address,phoneNum, token,DeliverDate,PickUpDate } = event.arguments.input;
 
        var params = {
            Destination: {
              ToAddresses: ["wilsonzhaang666@gmail.com"],
            },
            Message: {
              Body: {
                Text: { Data: "Hi there,\nYour Order is Successful\nHere is Your Order Details:\n"
                +"Contact Number: "+phoneNum
                +"\n Address: "+address
                +"\n total: "+ total  
                +"\n Delivery/Pick Up Time: "+DeliverDate+"/"+PickUpDate},
              },
        
              Subject: { Data: "Your Order Is Successful" },
            },
            Source: "casessite01@gmail.com",
          };
        await sendrequest(params)
        return "SUCCESS";
      } catch (err) {
        throw new Error(err);
      }

};
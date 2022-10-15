// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

const mailer = require("./Mailer.js");

exports.handler = (event, context) => {
  try {
    mailer.run(event, context, (error, result) => {
      context.done(error);
    });
    return "SUCCESS";
  } catch (error) {
    throw new Error(err);
  }
  y;
};

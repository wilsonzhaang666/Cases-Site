const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = "Order-ghiz4pdgjrc6df7e23drxyjgxq-dev";
const ORDER_TYPE = "Order";
const BOOK_ORDER_TABLE = "ProductOrder-ghiz4pdgjrc6df7e23drxyjgxq-dev";
const BOOK_ORDER_TYPE = "ProductOrder";
// const BOOK_TABLE = "Book-hjfzxqw62rgpdb4jgpf27ueacu-prod";
const ProductType_TABLE = "ProductType-ghiz4pdgjrc6df7e23drxyjgxq-dev";

const createOrder = async (payload) => {
  const {
    id,
    address,
    username,
    DeliverDate,
    PickUpDate,
    phoneNum,
    email,
    total,
    firstName,
    lastName,
    address2,
    suburb,
    postcode,
  } = payload;
  var params = {
    TableName: ORDER_TABLE,
    Item: {
      id: id,
      __typename: ORDER_TYPE,
      customer: email,
      phoneNum: phoneNum,
      DeliverDate: DeliverDate,
      PickUpDate: PickUpDate,
      address: address,
      user: username,
      total: total,
      firstName: firstName,
      lastName: lastName,
      address2: address2,
      suburb: suburb,
      status: "PENDING",
      postcode: postcode,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  };
  console.log(params);
  await documentClient.put(params).promise();
};

const createBookOrder = async (payload) => {
  let bookOrders = [];
  for (i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    bookOrders.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: BOOK_ORDER_TYPE,
          product_id: cartItem.id,
          amount: cartItem.amount,
          order_id: payload.id,
          customer_email: payload.email,
          category: cartItem.category,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
    });
  }
  let params = {
    RequestItems: {},
  };
  params["RequestItems"][BOOK_ORDER_TABLE] = bookOrders;
  console.log(params);
  await documentClient.batchWrite(params).promise();
};

const ChangeCasesStatus = async (payload) => {
  let bookOrders = [];
  for (i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    if (
      cartItem.quantity > cartItem.amount ||
      cartItem.quantity == cartItem.amount
    ) {
      bookOrders.push({
        PutRequest: {
          Item: {
            id: cartItem.ProdctTypeId,
            __typename: "ProductType",
            product_id: cartItem.id,

            category: cartItem.category,
            quantity: cartItem.quantity - cartItem.amount,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        },
      });
    } else return;
  }
  let params = {
    RequestItems: {},
  };

  params["RequestItems"][ProductType_TABLE] = bookOrders;
  console.log(params);

  await documentClient.batchWrite(params).promise();
};
//try cartItem.amount-1 for decrase the amount and try if the amount was smaller then 0 then false and if the
// the if the amount is =0 then the item should not be updated, instead it should be delete.
//need function for phone call
/*
 * Get order details from processPayment lambda
 * Create an order
 * Link books to the order - Users can see the past orders and admins can view orders by user
 * Email the invoice (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.order_id = uuidv4();

    // create a new order
    await createOrder(payload);

    // links books with the order
    await createBookOrder(payload);
    await ChangeCasesStatus(payload);
    // Note - You may add another function to email the invoice to the user

    // return {
    //   id,
    //   cart,
    //   total,
    //   address,
    //   phoneNum,
    //   username,
    //   DeliverDate,
    //   email,
    //   PickUpDate,
    // };
    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};

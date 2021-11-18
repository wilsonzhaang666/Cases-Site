import React, { useEffect, useState } from "react";
import { API, graphqlOperation,Auth } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listOrders } from "../api/queries";
import { processOrder } from "../api/mutations";

const OrderContext = React.createContext();

const OrderProvider = ({ children }) => {
  const [orders, setBooks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);




  const fetchBooks = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listOrders,
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      });
      const orders = data.listOrders.items;

      setBooks(orders);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, featured, loading }}>
      {children}
    </OrderContext.Provider>
  );
};

export { OrderContext, OrderProvider };

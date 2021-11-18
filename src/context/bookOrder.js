import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listBookOrders } from "../api/queries";
import { processOrder } from "../api/mutations";

const BookOrderContext = React.createContext();

const BookOrderProvider = ({ children }) => {
  const [bookorders, setBooks] = useState([]);
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
        query: listBookOrders,
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      });
      const orders = data.listBookOrders.items;

      setBooks(orders);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BookOrderContext.Provider value={{ bookorders, featured, loading }}>
      {children}
    </BookOrderContext.Provider>
  );
};

export { BookOrderContext, BookOrderProvider };

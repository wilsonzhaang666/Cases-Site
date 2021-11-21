import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listBooks } from "../api/queries";
import { processOrder } from "../api/mutations";

const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
      alert("Your Order is Successful");

    } catch (err) {
      console.log(err);
      alert("There is something happen with the process");
    }
  };

  const fetchBooks = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listBooks,
        authMode: "API_KEY",
        variables: {  limit: 10000 },

      });
      const books = data.listBooks.items;
      const featured = books.filter((book) => {
        return !!book.featured;
      });
      setBooks(books);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BookContext.Provider value={{ books, featured, loading, checkout }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };

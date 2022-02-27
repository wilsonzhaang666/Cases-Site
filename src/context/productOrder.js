import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProductOrders } from "../api/queries";
import { processOrder } from "../api/mutations";

const ProductOrderContext = React.createContext();

const ProductOrderProvider = ({ children }) => {
  const [productorders, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProductOrders();
  }, []);

  const fetchProductOrders = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listProductOrders,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      const orders = data.listProductOrders.items;

      setProducts(orders);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductOrderContext.Provider value={{ productorders, featured, loading }}>
      {children}
    </ProductOrderContext.Provider>
  );
};

export { ProductOrderContext, ProductOrderProvider };

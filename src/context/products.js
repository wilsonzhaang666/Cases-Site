import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProducts, listProductTypes } from "../api/queries";
import { processOrder } from "../api/mutations";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productTypes, setProductType] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
    fetchProductTypes();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails,
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

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listProducts,
        authMode: "API_KEY",
        variables: { limit: 10000 },
      });
      const products = data.listProducts.items;
      const featured = products.filter((product) => {
        return !!product.featured;
      });
      setProducts(products);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchProductTypes = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listProductTypes,
        authMode: "API_KEY",
        variables: { limit: 10000 },
      });
      const productTypes = data.listProductTypes.items;
      setProductType(productTypes);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{ productTypes, products, featured, loading, checkout }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };

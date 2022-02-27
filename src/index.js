import React from "react";
import ReactDOM from "react-dom";
import { OrderProvider } from "./context/orders";
import { ProductOrderProvider } from "./context/productOrder";
import { ProductProvider } from "./context/products";

import App from "./App";
import { CartProvider } from "./context/cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDOM.render(
  <ProductOrderProvider>
    <OrderProvider>
      <ProductProvider>
        <CartProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </CartProvider>
      </ProductProvider>
    </OrderProvider>
  </ProductOrderProvider>,
  document.getElementById("root")
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BookProvider } from "./context/books";
import { OrderProvider } from "./context/orders";
import { BookOrderProvider } from "./context/bookOrder";

import App from './App';
import { CartProvider } from './context/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BookOrderProvider>
  <OrderProvider>
  <BookProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </BookProvider>
  </OrderProvider>
  </BookOrderProvider>,
  document.getElementById('root')
);

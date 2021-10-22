import React from 'react';
import ReactDOM from 'react-dom';
import { BookProvider } from "./context/books";
import App from './App';
import { CartProvider } from './context/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BookProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </BookProvider>,
  document.getElementById('root')
);

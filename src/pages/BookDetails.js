import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";
import { mobile } from "../responsive";
import styled from "styled-components";

const BookDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { books } = useContext(BookContext);
  const [updatedBook, setUpdatedBook] = useState("");
  const { addToCart } = useContext(CartContext);
  const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
  `;
  const book = books.find((book) => {
    return book.id === id;
  });

  useEffect(() => {
    if (book) {
      setUpdatedBook(book);
    }
  }, [book]);
  if (!book) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, category, quantity, price } = book;
  const handleAddtoCart = () => {
    const DiscountProduct = updatedBook;
    DiscountProduct.price = 10;
    addToCart({ ...DiscountProduct, id });
    history.push("/cart");
  };
  return (
    <section className="book-details">
      <div className="detail-image">
        <img
          src={url}
          style={{
            maxWidth: "400px",
            maxHeight: "500px",
            width: "auto",
            height: "auto",
          }}
          alt="10x Rule"
        />
      </div>
      <div className="detail-description">
        <h3>{title}</h3>
        {(() => {
          if (category === "event") {
            return <p>Special Item</p>;
          } else {
            return <p>{category}</p>;
          }
        })()}

        <h4 style={{ textDecoration: "line-through 3px" }}>
          Price - $ {price}
        </h4>
        <h4>Now - $ 10</h4>
        <Button
          className="btn"
          onClick={() => {
            handleAddtoCart();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
};

export default BookDetails;

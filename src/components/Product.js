import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { IconButton } from '@material-ui/core';
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";
import { useParams, useHistory } from "react-router-dom";



const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ image,id}) => {
  const history = useHistory();
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  const book = books.find((book) => {
    return book.id === id;
  });
  if (!book) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, category, quantity, price } = book;
  console.log(image)
  console.log(id)
  return (
    <Container>
      <Circle />
      <Image src={image} />
      <Info>
        
        <Icon>
        <IconButton onClick={() => {
            addToCart({ ...book, id });
            history.push("/cart");
          }}>

          <ShoppingCartOutlined />
          </IconButton>

        </Icon>


        <Icon>
        <IconButton component={Link} to={`cases/${id}`}>


          <SearchOutlined  />
          </IconButton>

          </Icon>


      </Info>
    </Container>
  );
};

export default Product;

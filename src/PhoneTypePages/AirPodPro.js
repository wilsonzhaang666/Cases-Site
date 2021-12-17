import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/books";
import styled from "styled-components";
import Product from "../components/Product";

import { mobile } from "../responsive";
const AirPodPro = () => {
  const [Category, setCategory] = useState("airpodpro");
  const [field, setField] = useState("airpodpro");

  const { books } = useContext(BookContext);
  console.log(books);

  const handleInputChange = (event) => {
    setField(event.target.value);
    setCategory(event.target.value);
  };
  // general input change
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(books);
  if (!books.length) {
    return <h3>No Books Available</h3>;
  }

  const Container = styled.div``;

  const Title = styled.h1`
    margin: 20px;
  `;

  const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
  `;

  const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
  `;

  const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
  `;
  const Option = styled.option``;

  const ContainerForProduct = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  return (
    <Container>
      <Title>Case For AirPod Pro:</Title>

      <ContainerForProduct>
        {books
          .filter((book) => book.category === Category && book.quantity !== 0)
          .map(({ image: image, id, title }) => (
            <Product image={image} id={id} key={id} />
          ))}
      </ContainerForProduct>
    </Container>
  );
};

export default AirPodPro;

import React, { useContext,useState } from 'react'
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';
import styled from "styled-components";
import Product from "../components/Product";

import { mobile } from "../responsive";
const Iphone11 = () => {
    const [Category, setCategory] = useState("iphone11");
    const [field, setField] =  useState("iphone11");

    const { books } = useContext(BookContext);
    console.log(books)

    const handleInputChange = (event) => {
        setField(event.target.value);
        setCategory(event.target.value);

      };
    // general input change
      const handleSubmit = (event) => {
        event.preventDefault();
    
        
      };
    console.log(books)
    if (!books.length) {
        return <h3>No Books Available</h3>
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

      <FilterContainer>
        <Filter>
          <FilterText>Select Phone Model:</FilterText>
          <select onChange={handleInputChange} >                         
          <Option value="iphone11">iPhone11</Option>
         <Option value="iphone11pro">iPhone11 pro</Option>
            <Option value="iphone11promax">iPhone11 pro Max</Option>       
          </select>
          
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Title>Case For {Category}:</Title>

      <ContainerForProduct>
      
      {books
             .filter(book=>book.category===Category &&book.quantity!==0)
             .map(({ image: image, id, title }) => (

                     <Product image={image} id={id} key={id} />

             ))}
    </ContainerForProduct>
    </Container>
  );
};


export default Iphone11;

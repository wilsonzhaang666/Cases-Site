import React, { useContext,useState } from 'react'
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';
import styled from "styled-components";
import Product from "../components/Product";

import { mobile } from "../responsive";
const Iphone13 = () => {
    const [Category, setCategory] = useState("iphone13");
    const [field, setField] =  useState("iphone13");

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
    
    
    // return (
    //     <div>
    //   <form onSubmit={handleSubmit}>
    //   <div class="form-group">
    //     <div className="col-md-4">
    //       <label htmlFor="phonetype">Your Phone Type</label>
    //       <select class="form-control"   onChange={handleInputChange} >
    //            <option value="iphone11">iphone11</option>
    //          <option value="iphone11pro">iphone11 pro</option>
    //              <option value="iphone11promax">iphone11 pro Max</option>
    //            <option value="iphone12">iphone12</option>                            
    //              <option value="iphone12mini">iphone12 mini</option>                            
    //             <option value="iphone12pro">iphone12 pro</option>                            
    //              <option value="iphone12promax">iphone12 pro Max</option>                            
    //              <option value="iphone13">iphone13</option>                            
    //              <option value="iphone13mini">iphone13 mini</option>                            
    //             <option value="iphone13pro">iphone13 pro</option>                            
    //             <option value="iphone13promax">iphone13 pro Max</option>       
    //         </select>

    //     </div>
    //   </div>
      
    // </form>
    //     <section className="books">
    //         {books
    //         .filter(book=>book.category===Category &&book.quantity!==0)
    //         .map(({ image: image, id, title }) => (
    //             <article key={id} className="book">
    //                 <div className="book-image">
    //                     <img src={image} style={{maxWidth:"150px",maxHeight:"120px",width:"auto",height:"auto"}}   alt={title} />
    //                 </div>
    //                 <Link to={`cases/${id}`} className="btn book-link">details</Link>
    //             </article>
    //         ))}
            
    //     </section>
    //     </div>
    // )

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
              <Option value="iphone13">iPhone13</Option>                            
              <Option value="iphone13mini">iPhone13 mini</Option>                            
             <Option value="iphone13pro">iPhone13 pro</Option>                            
             <Option value="iphone13promax">iPhone13 pro Max</Option>       
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


export default Iphone13

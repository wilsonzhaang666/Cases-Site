import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/books";
import styled from "styled-components";
import Product from "../components/Product";

import { mobile } from "../responsive";
const Books = () => {
  const [Category, setCategory] = useState("iphone11");
  const [field, setField] = useState("iphone11");

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

  const Container = styled.div`
    margin-top: -20px;
    background-color: #f8f8f8;
  `;
  const ContainerBlank = styled.div`
    height: 50px;
  `;
  const Title = styled.h1`
    margin-top: 20px;
  `;
  const ProductContainer = styled.div`
    height: auto;
  `;

  const ContainerForProduct = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  const ProductItem = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 100px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    text-align: left;
  `;
  const ProductTitle = styled.h1`
    text-align: left;
    position: absolute;
    color: black;
    top: 2vh;
    left: 2vh;
  `;
  const ProductSubtitle = styled.p`
    text-align: left;
    font-size: 10px;
    position: absolute;
    color: grey;
    top: 4.5vh;
    left: 2vh;
  `;

  return (
    <Container>
      <ProductContainer>
        <ContainerBlank></ContainerBlank>
        <Title>Case For {Category}:</Title>

        {books
          .filter((book) => book.category === Category && book.quantity !== 0)
          .map(({ image: image, id, title }) => (
            <Link
              to="/iphone13"
              style={{ display: "inline-block", width: "50%", height: "100%" }}
            >
              <ProductItem style={{ backgroundColor: "#FFFFFF" }}>
                <ProductTitle> {title}</ProductTitle>
                {/* <ProductSubtitle>All series included</ProductSubtitle> */}

                <iphonePicSection>
                  <img
                    src={image}
                    style={{
                      marginTop: "100px",
                      maxHeight: "150px",
                      marginLeft: "50px",
                    }}
                  />
                </iphonePicSection>
              </ProductItem>
            </Link>
          ))}
      </ProductContainer>

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

export default Books;

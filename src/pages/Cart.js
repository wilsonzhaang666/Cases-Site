import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton } from '@material-ui/core';
import { mobile } from "../responsive";
const Cart = () => {
  const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
  const history = useHistory();
  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

  if (!cart.length) {
    return <h3>Empty Cart</h3>
  }
  // return (
  //   <section className="cart">
  //     <header>
  //       <h2>My Cart</h2>
  //     </header>
  //     <div className="cart-wrapper">
  //       {cart.map(({ id, title, price, image, amount }) => (
  //         <article key={id} className="cart-item">
  //           <div className="image">
  //             <img src={image} alt="cart item" />
  //           </div>
  //           <div className="details">
  //             <p>{title}</p>
  //             <p>$ {price}</p>
  //           </div>
  //           <div className="amount">
  //             <button onClick={() => increaseAmount(id)}><FiChevronUp /></button>
  //             <p>{amount}</p>
  //             <button onClick={() => decreaseAmount(id, amount)}><FiChevronDown /></button>
  //           </div>
  //         </article>
  //       ))}
  //     </div>
  //     <div>
  //       <h3>Total: $ {total}</h3>
  //     </div>
  //     <div>
  //       {/* Try to put attribute if the checkout going to use apple pay. */}
  //       <button className="btn" onClick={() => history.push("/checkout")}>Checkout</button>
  //     </div>
  //   </section>
  // );
  return (
    <Container>

      <Wrapper>
        
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => history.push("/cases")}>CONTINUE SHOPPING</TopButton>

          <TopTexts>
            <TopText>Shopping Bag</TopText>
          </TopTexts>
          <TopButton type="filled"onClick={() => history.push("/checkout")}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
          {cart.map(({ id, title, price, image, amount,category }) => (
             <>

            <Product>
              <ProductDetail key={id}>
                <Image src={image} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {id}
                  </ProductId>
                  <ProductSize>
                    <b>Category:</b> {category}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add  onClick={() => increaseAmount(id)}/>
                  <ProductAmount>{amount}</ProductAmount>
                  <Remove onClick={()=> decreaseAmount(id, amount)} />
                </ProductAmountContainer>
                <ProductPrice>$ {price*amount}</ProductPrice>
              </PriceDetail>
            </Product>
            <br/>
            </>
                                         ))}
            <Hr />

          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${(total*0.9).toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax</SummaryItemText>
              <SummaryItemPrice>${(total*0.1).toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${total}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={() => history.push("/checkout")}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

    </Container>
  );
};

export default Cart;

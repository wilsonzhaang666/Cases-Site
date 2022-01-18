import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { mobile } from "../responsive";
import { Auth } from "aws-amplify";

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
  text-decoration: none;
  color: inherit;
  padding: 10px;
  border: 1px solid;

  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
`;

const TopButton1 = styled.button`
    text-decoration: none;
    color: inherit;
padding: 10px;
font-weight: 600;
cursor: pointer;
border:none;
background-color:black};
color:white;
:disabled {
  background-color: #d3d3d3;
}
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
  :disabled {
    background-color: #d3d3d3;
  }
`;

const Notification = styled.div`
  height: 10em;
  position: relative;
`;
const Notice = styled.h1`
  margin: 0;
  position: absolute;
  top: 250%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
const Engagement = styled.p`
  font-weight: light;
  font-size: 14px;
  color: grey;
  margin: 0;
  position: absolute;
  top: 280%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
const Reminder = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 20px;
`;
const Cart = () => {
  const [authStatus, setAuthStatus] = useState(null);
  const history = useHistory();
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function loadUser() {
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;
      setUser(username);
    }
    loadUser();
  }, []);
  const { cart, total, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  if (!cart.length) {
    return (
      <Notification>
        <Notice>Empty Cart</Notice>
        <Engagement>Go Grab some stuff and Come Back 😄! </Engagement>
      </Notification>
    );
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton onClick={() => history.push("/cases")}>
              CONTINUE SHOPPING
            </TopButton>

            <TopTexts>
              <TopText>Shopping Bag</TopText>
            </TopTexts>
            <TopButton1
              disabled={!user}
              type="filled"
              onClick={() => history.push("/checkout")}
            >
              CHECKOUT NOW
            </TopButton1>
          </Top>
          <Bottom>
            <Info>
              {cart.map(({ id, title, price, image, amount, category }) => (
                <>
                  <Product>
                    <ProductDetail key={id}>
                      <Image src={image} />
                      <Details>
                        <ProductName>
                          <b style={{ fontSize: "22px" }}>{title}</b>
                        </ProductName>
                        <ProductId></ProductId>

                        <ProductSize>
                          <b>Product ID:</b> {id}
                          <br />
                          <b>Category:</b> {category}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add onClick={() => increaseAmount(id)} />
                        <ProductAmount>{amount}</ProductAmount>
                        <Remove onClick={() => decreaseAmount(id, amount)} />
                      </ProductAmountContainer>
                      <ProductPrice>
                        $ {(price * amount).toFixed(2)}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                  <br />
                </>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>${total.toFixed(2)}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Tax</SummaryItemText>
                <SummaryItemPrice>$0</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Discount</SummaryItemText>
                <SummaryItemPrice>0%</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>${total.toFixed(2)}</SummaryItemPrice>
              </SummaryItem>
              {(() => {
                if (user === null) {
                  return (
                    <Reminder>
                      Please Sign In Before Checkout 👉
                      <Link
                        to="signin"
                        style={{
                          color: "black",
                          backgroundImage:
                            "linear-gradient(to right, violet, indigo, orange, red)",
                          webkitBackgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        Sign In
                      </Link>
                    </Reminder>
                  );
                } else {
                  return <></>;
                }
              })()}

              <Button
                disabled={!user}
                onClick={() => history.push("/checkout")}
              >
                CHECKOUT NOW
              </Button>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Cart;

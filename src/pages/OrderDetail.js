import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../context/orders";
import { ProductOrderContext } from "../context/productOrder";
import { logo } from "../assets/logo.jpg";

import styled from "styled-components";
import { Auth } from "aws-amplify";

import { mobile } from "../responsive";
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
const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 20px;
`;
const Info = styled.div`
  flex: 3;
`;

const ProductItem = styled.div`
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

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const OrderDetail = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function loadUser() {
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;
      setUser(username);
    }
    loadUser();
  }, []);

  const { orders } = useContext(OrderContext);
  const { productorders } = useContext(ProductOrderContext);

  let orderslist = orders.filter(function (item) {
    return item.user == user;
  });
  if (user === null) {
    return (
      <Notification>
        <Notice>
          Sign In Here 👉
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
        </Notice>
        <Engagement>Please Sign In to See Your Order History</Engagement>
      </Notification>
    );
  } else if (!orderslist.length) {
    return (
      <Notification>
        <Engagement>Haven't Got Anything Yet </Engagement>{" "}
        <Notice>Go Grab Something😋</Notice>
      </Notification>
    );
  }

  return (
    <Container>
      <div>
        <div>
          <Title>Order List</Title>
          <div>
            <Info>
              {orderslist.map(({ id, user, total }) => (
                <>
                  <ProductItem>
                    <ProductDetail key={id}>
                      <Image src={require("../assets/logo.jpg")} />

                      <Details>
                        <ProductName>
                          <b>Username:</b> {user}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {id}
                        </ProductId>
                        <ProductSize>
                          <b>Total:</b> {total}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <ProductAmount>
                          <Link to={`order/${id}`} style={{ color: "black" }}>
                            Order Details
                          </Link>
                        </ProductAmount>
                      </ProductAmountContainer>
                    </PriceDetail>
                  </ProductItem>
                  <br />
                </>
              ))}
              <Hr />
            </Info>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OrderDetail;

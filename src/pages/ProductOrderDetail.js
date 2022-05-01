import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { OrderContext } from "../context/orders";
import { ProductOrderContext } from "../context/productOrder";
import { ProductContext } from "../context/products";

import { mobile } from "../responsive";
import styled from "styled-components";

const ProductOrderDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { orders } = useContext(OrderContext);
  const { productorders } = useContext(ProductOrderContext);
  const { products } = useContext(ProductContext);
  const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
  `;
  const order = orders.find((order) => {
    return order.id === id;
  });
  const productorder = productorders.filter((productorder) => {
    return productorder.order_id === order.id;
  });

  const product = products.filter((o1) =>
    productorder.some((o2) => o1.id === o2.product_id)
  );

  if (!productorder) {
    return <h3>Loading...</h3>;
  }

  const Container = styled.div`
    max-width: 1080px;
    margin: auto;
  `;

  const Title = styled.h1`
    margin: 20px;
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

  return (
    <Container>
      <div>
        <div>
          <div>
            <Info>
              <Title>Item Detail</Title>

              {productorder.map((productorder) => (
                <>
                  <Product>
                    <ProductDetail key={id}>
                      <Image src={productorder.product.image} />
                      <Details>
                        <ProductName>
                          {" "}
                          <b>Category:</b> {productorder.category}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {id}
                        </ProductId>
                        <ProductSize>
                          <b>Price:</b> {productorder.product.price}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <ProductAmount></ProductAmount>
                      </ProductAmountContainer>
                    </PriceDetail>
                  </Product>
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

export default ProductOrderDetail;

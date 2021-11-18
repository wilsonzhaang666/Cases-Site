import React, { useContext,useState,useEffect } from 'react'
import { Link } from "react-router-dom";
import { OrderContext } from '../context/orders';
import { BookOrderContext } from '../context/bookOrder';

import styled from "styled-components";
import Product from "../components/Product";
import { Auth } from "aws-amplify";

import { mobile } from "../responsive";
const OrderDetail = () => {
    const[user,setUser]= useState(null);
    useEffect(() => {
        async function loadUser() {
          const user = await Auth.currentAuthenticatedUser(); 
            const username = user.username
          setUser(username);
        }
        loadUser();
      }, []);

    const [Category, setCategory] = useState("iphone11");
    const [field, setField] =  useState("iphone11");

    const { orders } = useContext(OrderContext);
    const {bookorders} = useContext(BookOrderContext);
    const handleInputChange = (event) => {
        setField(event.target.value);
        setCategory(event.target.value);

      };
    // general input change
      const handleSubmit = (event) => {
        event.preventDefault();
    
        
      };
      let orderslist = orders.filter(function(item){
        return item.user == user;
     })
      console.log(bookorders.at(0))

    if (!orderslist.length) {
        return <h3>Haven't order anything, go get one!</h3>
    }
    
    const Container = styled.div``;

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
      <Title>Order List</Title>
          <div>
          <Info>
          {orderslist.map(({ id, user, total }) => (
             <>

            <Product>
              <ProductDetail key={id}>
              {(() => {
            for (var i=0; i < bookorders.length; i++) {
              if(bookorders.at(i).order_id=id){
                return(
                  <>
                <Image src={bookorders.at(i).book.image} />
                  </>
                )
                break;
              }
          }
      })()}
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
                  <ProductAmount>Detail</ProductAmount>

                </ProductAmountContainer>
              </PriceDetail>
            </Product>
            <br/>
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

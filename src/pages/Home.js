import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Carousel from 'react-bootstrap/Carousel'
import { BookContext } from "../context/books";
import styled, { css } from "styled-components";

export const ValignTextMiddle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const RobotocondensedRegularNormalBlack18 = css`
  color: var(--black);
  font-family: var(--font-family-roboto_condensed-regular);
  font-size: var(--font-size-m);
  font-weight: 400;
  font-style: normal`
  ;

const MainSlideShow = styled.div`
align-items: flex-start;
display: flex;
height:250px;
margin-top:42px;
margin:24px;
background-color: #D1F1EB;
border-radius: 12px;
justify-content: center;

`;
const SecondSideShow = styled.div`
align-items: flex-start;
display: flex;
height:250px;
margin-top:42px;
margin:24px;
background-color: #F5624D;
border-radius: 12px;
justify-content: center;

`;



const GetToSeeOurBrand = styled.div`
  ${ValignTextMiddle}
  ${RobotocondensedRegularNormalBlack18}
            width: 191px;
  height: 120px;
  letter-spacing: 0;
  margin-top:50px;
  margin-right:5px;
  margin-left:20px;
`;

const Span1 = styled.span`
  font-family: var(--font-family-roboto_condensed-bold);
  font-weight: 700;
  color: var(--black);
  font-size: 18px;
`;

const Span3 = styled.span`
  font-family: var(--font-family-roboto_condensed-regular);
  font-weight: 600;
  color: #ee0000;
  font-size: 18px;
`;
const ViewAll = styled(Link)`
    margin-top: 30px;
    border:none;
    background-color:#FFFFFF;
    font-size:24px;
`;



//Second Section for the Phone Category
const PhoneCategory = styled.div`
    height:auto;

`

const PhoneCategoryTitle = styled.h1`
margin:20px;
`

const ContainerForCategory = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const PhoneCategoryItem = styled.div`

  flex: 1;
  margin: 10px;
  min-width: 100px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius:12px;
  overflow:hidden;
  text-align:left;

`;

//Section of Each Category Image 
const iphonePicSection = styled.div`
align-items: flex-start;
`
const CategoryTitle = styled.h1`
text-align:left;
position:absolute;
color:black;
top:2vh;
left:2vh
`

const Home = () => {
  const { featured } = useContext(BookContext);
  if (!featured.length) {
    return <h3>No Featured Books</h3>
  }
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <MainSlideShow>
            <GetToSeeOurBrand>
              <span>
                <span className="robotocondensed-regular-normal-black-18px" style={{ fontSize: "18px" }}>Get To See Our brand new </span>
                <Span1>
                  IPhone Cases <br />
                </Span1>
                <span className="robotocondensed-regular-normal-black-18px" style={{ fontSize: "18px" }}>For Only </span>
                <Span3>$12.99</Span3>
              </span>
              <ViewAll style={{ textAlign: "center", textDecoration: "none" }} to="/cases">
                <span style={{ color: "black", fontSize: "18px", fontWeight: "500" }}>View All</span>
              </ViewAll>
            </GetToSeeOurBrand>
            <img
              src={require('../assets/Cases.png')}
              style={{ marginTop: "10px", maxHeight: "200px" }}
            />

          </MainSlideShow>
        </Carousel.Item>
        <Carousel.Item>
          <SecondSideShow >
            <GetToSeeOurBrand>
              <span>
                <span className="robotocondensed-regular-normal-black-18px" style={{ fontSize: "18px", color: "white" }}>Come to Browse Our Christmas Collection </span>


              </span>
              <ViewAll style={{ textAlign: "center", textDecoration: "none" }} to="/cases">
                <span style={{ color: "black", fontSize: "18px", fontWeight: "500" }}>View All</span>
              </ViewAll>
            </GetToSeeOurBrand>
            <img
              src={require('../assets/CasesItem2.png')}
              style={{ marginTop: "10px", maxHeight: "200px", marginRight: "0px" }} />

          </SecondSideShow>


        </Carousel.Item>
      </Carousel>
      <PhoneCategory>
        <PhoneCategoryTitle>IPhone Cases</PhoneCategoryTitle>

        <ContainerForCategory>
          <Link to="/iphone13" style={{ display: "inline-block",width:"50%",height:"100%" }}>
          <PhoneCategoryItem style={{backgroundColor: "#edfff2"}}>  
          <CategoryTitle> IPhone13</CategoryTitle>
          <iphonePicSection>
          <img
              src={require('../assets/iPhone13TP.png')}
              style={{ marginTop: "100px", maxHeight: "150px", marginLeft: "50px"}} />
          </iphonePicSection>
            
          </PhoneCategoryItem>
          </Link>
          <Link to="/iphone12" style={{ display: "inline-block",width:"50%",height:"100%" }}>

          <PhoneCategoryItem style={{backgroundColor: "#EB9494"}}>
          <CategoryTitle>IPhone12</CategoryTitle>
          <iphonePicSection>
            
          <img
              src={require('../assets/iphone12TP1.png')}
              style={{ marginTop: "70px", maxHeight: "150px", marginLeft:"30px"}} />
          </iphonePicSection>
          </PhoneCategoryItem>
          </Link>
          <Link to="/iphone11" style={{ display: "inline-block",width:"100%",height:"100%" }}>

          <PhoneCategoryItem style={{backgroundColor: "#F6FFBC"}}>
          <CategoryTitle> IPhone11</CategoryTitle>
          <iphonePicSection>
          <img
              src={require('../assets/Transparent IPhone11.png')}
              style={{ marginTop: "120px", maxHeight: "150px", marginLeft: "50px"}} />
          </iphonePicSection>
          </PhoneCategoryItem>
          </Link>

        </ContainerForCategory>
      </PhoneCategory>



    </>
  )
}

export default Home;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Carousel from "react-bootstrap/Carousel";
import { ProductContext } from "../context/products";
import styled, { css } from "styled-components";
import BackgroundImage from "../assets/snowflake.jpg";
import BackgroundImageTP from "../assets/snowflake-tp.png";

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
  font-style: normal;
`;

const ContainerForAll = styled.div`
  max-width: 1080px;
  margin: auto;
`;
const MainSlideShow = styled.div`
  align-items: flex-start;
  display: flex;
  height: 250px;
  margin-top: 42px;
  margin: 24px;
  background-color: #d1f1eb;
  border-radius: 12px;
  justify-content: center;
`;
const SecondSideShow = styled.div`
  align-items: flex-start;
  display: flex;
  height: 250px;
  margin-top: 42px;
  margin: 24px;
  background: linear-gradient(to bottom, #cce3ff 100%, #cce4fe 100%);
  border-radius: 12px;
  justify-content: center;
`;

const GetToSeeOurBrand = styled.div`
  ${ValignTextMiddle}
  ${RobotocondensedRegularNormalBlack18}
            width: 191px;
  height: 120px;
  letter-spacing: 0;
  margin-top: 50px;
  margin-right: 5px;
  margin-left: 20px;
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

const Span2 = styled.span`
  font-family: var(--font-family-roboto_condensed-regular);
  font-weight: 600;
  font-size: 18px;
  text-decoration: line-through;
`;
const ViewAll = styled(Link)`
  margin-top: 30px;
  border: none;
  background-color: #ffffff;
  font-size: 24px;
`;

//Second Section for the Phone Category
const PhoneCategory = styled.div`
  height: auto;
`;

const PhoneCategoryTitle = styled.h1`
  margin: 20px;
`;

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
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
`;

//Section of Each Category Image
const iphonePicSection = styled.div`
  align-items: flex-start;
`;
const CategoryTitle = styled.h1`
  text-align: left;
  position: absolute;
  color: black;
  top: 2vh;
  left: 2vh;
`;
const CategorySubtitle = styled.p`
  text-align: left;
  font-size: 10px;
  position: absolute;
  color: grey;
  top: 4.5vh;
  left: 2vh;
`;

//Case Category
const AirpodCategory = styled.div`
  height: auto;
`;
//Event CategorySubtitle
const EventCategory = styled.div`
  height: auto;
`;
const EventCategoryItem = styled.div`
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
const EventSubtitle = styled.div`
  text-align: left;
  font-size: 10px;
  position: absolute;
  color: #f2f2f2;
  top: 6vh;
  left: 2vh;
`;

const EventCarouselspan = styled.span`
  font-family: "Akaya Telivigala", cursive;
  font-size: 24px;
  text-align: center;
  color: white;
`;

const EventTextContainer = styled.div``;
const EventViewAll = styled(Link)`
  border-radius: 12px;
  background-color: #ffffff;
  font-size: 24px;
`;

const DwenDwen = styled.div`
  min-width: 350px;
  margin-left: -82px;
  margin-bottom: 10px;
`;

const Home = () => {
  const { featured } = useContext(ProductContext);
  return (
    <>
      <ContainerForAll>
        <Carousel fade={true}>
          {/* <Carousel.Item>
            <Link
              to="/event"
              style={{ textAlign: "center", textDecoration: "none" }}
            >
              <SecondSideShow>
                <div className="snow"></div>

                <GetToSeeOurBrand>
                  <EventTextContainer>
                    <EventCarouselspan>
                      Bing Dwen Dwen are NOW available
                    </EventCarouselspan>
                  </EventTextContainer>
                  <DwenDwen>
                    <img
                      src={require("../assets/BingDwenDwen.png")}
                      style={{
                        marginTop: "10px",
                        maxHeight: "95px",
                      }}
                    />
                    <img
                      src={require("../assets/BingDwenDwen.png")}
                      style={{
                        marginTop: "10px",
                        maxHeight: "95px",
                      }}
                    />
                    <img
                      src={require("../assets/BingDwenDwen.png")}
                      style={{
                        marginTop: "10px",
                        maxHeight: "95px",
                      }}
                    />
                    <img
                      src={require("../assets/BingDwenDwen.png")}
                      style={{
                        marginTop: "10px",
                        maxHeight: "95px",
                      }}
                    />
                  </DwenDwen>

                  <EventViewAll
                    style={{ textAlign: "center", textDecoration: "none" }}
                    to="/event"
                  >
                    <span
                      style={{
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Pre-Order Now
                    </span>
                  </EventViewAll>
                </GetToSeeOurBrand>
              </SecondSideShow>
            </Link>
          </Carousel.Item> */}
          <Carousel.Item>
            <MainSlideShow>
              <GetToSeeOurBrand>
                <span>
                  <span
                    className="robotocondensed-regular-normal-black-18px"
                    style={{ fontSize: "18px" }}
                  >
                    Quick Sale Quick Sale!{" "}
                  </span>
                  <Span1>
                    IPhone Cases <br />
                  </Span1>
                  <span
                    className="robotocondensed-regular-normal-black-18px"
                    style={{ fontSize: "18px" }}
                  >
                    For Now Only{" "}
                  </span>
                  <br />
                  <Span2>$12.99</Span2>

                  <Span3>$10</Span3>
                </span>
                <ViewAll
                  style={{ textAlign: "center", textDecoration: "none" }}
                  to="/cases"
                >
                  <span
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "500",
                    }}
                  >
                    View All
                  </span>
                </ViewAll>
              </GetToSeeOurBrand>
              <img
                src={require("../assets/Cases.png")}
                style={{ marginTop: "10px", maxHeight: "200px" }}
              />
            </MainSlideShow>
          </Carousel.Item>
        </Carousel>
        {/* //Bing dun dun */}
        {/* <EventCategory>
          <PhoneCategoryTitle>Special Event</PhoneCategoryTitle>
          <ContainerForCategory>
            <Link
              to="/event"
              style={{ display: "inline-block", width: "50%", height: "100%" }}
            >
              <EventCategoryItem
                style={{
                  background:
                    "linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)",
                }}
              >
                <div className="snow"></div>
                <CategoryTitle> 冰墩墩</CategoryTitle>
                <EventSubtitle>Bing Dwen Dwen</EventSubtitle>

                <iphonePicSection>
                  <img
                    src={require("../assets/BingDwenDwen.png")}
                    style={{
                      marginTop: "20px",
                      maxHeight: "200px",
                      marginLeft: "40px",
                    }}
                  />
                </iphonePicSection>
              </EventCategoryItem>
            </Link>
          </ContainerForCategory>
        </EventCategory> */}
        {/* Phone Cases */}
        <PhoneCategory>
          <PhoneCategoryTitle>IPhone Cases</PhoneCategoryTitle>

          <ContainerForCategory>
            <Link
              to="/iphone13"
              style={{ display: "inline-block", width: "50%", height: "100%" }}
            >
              <PhoneCategoryItem style={{ backgroundColor: "#edfff2" }}>
                <CategoryTitle> IPhone13</CategoryTitle>
                <CategorySubtitle>All series included</CategorySubtitle>

                <iphonePicSection>
                  <img
                    src={require("../assets/iPhone13TP.png")}
                    style={{
                      marginTop: "100px",
                      maxHeight: "150px",
                      marginLeft: "50px",
                    }}
                  />
                </iphonePicSection>
              </PhoneCategoryItem>
            </Link>
            <Link
              to="/iphone12"
              style={{ display: "inline-block", width: "50%", height: "100%" }}
            >
              <PhoneCategoryItem style={{ backgroundColor: "#EB9494" }}>
                <CategoryTitle>IPhone12</CategoryTitle>
                <CategorySubtitle style={{ color: "#F6F6F6" }}>
                  All series included
                </CategorySubtitle>

                <iphonePicSection>
                  <img
                    src={require("../assets/iphone12TP1.png")}
                    style={{
                      marginTop: "70px",
                      maxHeight: "150px",
                      marginLeft: "30px",
                    }}
                  />
                </iphonePicSection>
              </PhoneCategoryItem>
            </Link>
            <Link
              to="/iphone11"
              style={{ display: "inline-block", width: "100%", height: "100%" }}
            >
              <PhoneCategoryItem style={{ backgroundColor: "#F6FFBC" }}>
                <CategoryTitle> IPhone11</CategoryTitle>
                <CategorySubtitle>All series included</CategorySubtitle>
                <iphonePicSection>
                  <img
                    src={require("../assets/Transparent IPhone11.png")}
                    style={{
                      marginTop: "120px",
                      maxHeight: "150px",
                      marginLeft: "50px",
                    }}
                  />
                </iphonePicSection>
              </PhoneCategoryItem>
            </Link>
          </ContainerForCategory>
        </PhoneCategory>

        {/* <AirpodCategory>
          <PhoneCategoryTitle>Airpod Cases</PhoneCategoryTitle>

          <ContainerForCategory> */}
        {/* <Link
            to="/airpod"
            style={{ display: "inline-block", width: "50%", height: "100%" }}
          >
            <PhoneCategoryItem style={{ backgroundColor: "#eac4ff" }}>
              <CategoryTitle> AirPod</CategoryTitle>
              <iphonePicSection>
                <img
                  src={require("../assets/Airpod.png")}
                  style={{
                    marginTop: "80px",
                    maxHeight: "150px",
                    marginLeft: "50px",
                  }}
                />
              </iphonePicSection>
            </PhoneCategoryItem>
          </Link> */}
        {/* <Link
              to="/airpodpro"
              style={{ display: "inline-block", width: "50%", height: "100%" }}
            >
              <PhoneCategoryItem style={{ backgroundColor: "#66B2FF" }}>
                <CategoryTitle> AirPod Pro</CategoryTitle>
                <iphonePicSection>
                  <img
                    src={require("../assets/AirpodPro.png")}
                    style={{
                      marginTop: "80px",
                      maxHeight: "150px",
                      marginLeft: "50px",
                    }}
                  />
                </iphonePicSection>
              </PhoneCategoryItem>
            </Link> */}
        {/* </ContainerForCategory>
        </AirpodCategory> */}
      </ContainerForAll>
    </>
  );
};

export default Home;

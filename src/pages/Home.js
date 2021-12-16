import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Carousel from 'react-bootstrap/Carousel'
import { BookContext } from "../context/books";
import styled,{css} from "styled-components";

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
const SecondSideShow =styled.div`
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

const PhoneCategory = styled.div`
    height:600px;
`

export const CategorySection = styled.div`
  display: grid
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px
`;

const iphone13Section = styled.div`
    display: flex;

    background-color:#00FF47;
    height:240px;
    border-radius: 12px;
justify-content: center;
`;

const iphone12Section = styled.div`
    display: flex;

    background-color:#EB9494;
    height:240px;
    border-radius: 12px;
justify-content: center;

`;
const iphone11Section = styled.div`
    display: flex;

    background-color:#EB9494;
    height:240px;
    border-radius: 12px;
justify-content: center;

`;

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
        <span className="robotocondensed-regular-normal-black-18px" style={{fontSize: "18px"}}>Get To See Our brand new </span>
        <Span1>
          IPhone Cases <br />
        </Span1>
        <span className="robotocondensed-regular-normal-black-18px"  style={{fontSize: "18px"}}>For Only </span>
        <Span3>$12.99</Span3>
      </span>
      <ViewAll style={{textAlign: "center",textDecoration: "none"}}to="/cases">
       <span style={{color:"black",fontSize: "18px",fontWeight:"500"}}>View All</span>
    </ViewAll>
    </GetToSeeOurBrand>
    <img 
  src={require('../assets/Cases.png')} 
     style={{marginTop: "10px",maxHeight:"200px"}}
    />
    
        </MainSlideShow>
  </Carousel.Item>
  <Carousel.Item>
  <SecondSideShow >
        <GetToSeeOurBrand>
      <span>
        <span className="robotocondensed-regular-normal-black-18px" style={{fontSize: "18px",color:"white"}}>Come to Browse Our Christmas Collection </span>


      </span>
      <ViewAll style={{textAlign: "center",textDecoration: "none"}}to="/cases">
       <span style={{color:"black",fontSize: "18px",fontWeight:"500"}}>View All</span>
    </ViewAll>
    </GetToSeeOurBrand>
    <img 
  src={require('../assets/CasesItem2.png')} 
     style={{marginTop: "10px",maxHeight:"200px",marginRight:"0px"}}/>
    
        </SecondSideShow>


  </Carousel.Item>
</Carousel>
{/* <CategorySection>
    <h1>IPhone Cases</h1>
    <categoryItem>
    <iphone13Section></iphone13Section>
    <iphone12Section></iphone12Section>
    <iphone11Section></iphone11Section>
    </categoryItem>


</CategorySection> */}
       
            <section className="featured">
                <header className="featured-head">
                    <h3>Latest Updated</h3>
                </header>
                <div className="books featured-list">
                    {featured
                    .filter(book => book.quantity!==0)
                    .map(({ id, image, title }) => (
                        <article key={id} className="book featured-book">
                            <div className="book-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`cases/${id}`} className="btn book-link">details</Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Home;
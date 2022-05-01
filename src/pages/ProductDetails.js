import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import { mobile } from "../responsive";
import styled from "styled-components";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products, productTypes } = useContext(ProductContext);
  const [updatedproduct, setUpdatedproduct] = useState();
  const { addToCart } = useContext(CartContext);
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [mainImage, setMainImage] = useState("");

  const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
  `;
  const product = products.find((product) => {
    return product.id === id;
  });
  useEffect(() => {
    if (product) {
      setUpdatedproduct(product);
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return <h3>Loading...</h3>;
  }

  const {
    image: url,
    title,
    category,
    quantity,
    price,
    Secondimage,
    Thirdimage,
  } = product;

  const handleCategoryChange = (e) => {
    setRadioValue(e.currentTarget.value);
    const updatedAreas = updatedproduct;
    var category;
    for (let i = 0; i < productTypes.length; i++) {
      if (productTypes[i].category === e.target.value) {
        category = productTypes.at(i);
      }
    }
    updatedAreas.quantity = category.quantity;
    updatedAreas.category = e.target.value;
    updatedAreas.ProdctTypeId = category.id;
    setUpdatedproduct(updatedproduct);
  };

  const hanldeImageSetting = (e) => {
    console.log(e);
    setMainImage(e);
  };
  //need to reform the variable to a new book object
  return (
    <div class="product-detail-Container">
      <section className="book-details">
        <div className="detail-image">
          <img
            src={mainImage}
            style={{
              maxWidth: "400px",
              maxHeight: "500px",
              width: "auto",
              height: "auto",
            }}
            alt="10x Rule"
          />
          <div className="subImages">
            <div>
              <img
                src={url}
                style={{
                  maxWidth: "120px",
                  maxHeight: "150px",
                  width: "auto",
                  height: "auto",
                  padding: "5px",
                }}
                alt="10x Rule"
                onClick={() => hanldeImageSetting(url)}
              />
              {(() => {
                if (Secondimage !== "" && Secondimage !== null) {
                  return (
                    <img
                      src={Secondimage}
                      style={{
                        maxWidth: "120px",
                        maxHeight: "150px",
                        width: "auto",
                        height: "auto",
                        padding: "5px",
                      }}
                      alt="10x Rule"
                      onClick={() => hanldeImageSetting(Secondimage)}
                    />
                  );
                } else {
                  return;
                }
              })()}
              {(() => {
                if (Thirdimage !== "" && Thirdimage !== null) {
                  return (
                    <img
                      src={Thirdimage}
                      style={{
                        maxWidth: "120px",
                        maxHeight: "150px",
                        width: "auto",
                        height: "auto",
                        padding: "5px",
                      }}
                      alt="10x Rule"
                      onClick={() => hanldeImageSetting(Thirdimage)}
                    />
                  );
                } else {
                  return;
                }
              })()}
            </div>{" "}
          </div>
        </div>

        <div className="detail-description">
          <h3>{title}</h3>
          {(() => {
            if (category === "event") {
              return <p>Special Item</p>;
            } else {
              return <p>{category}</p>;
            }
          })()}
          <spam style={{ fontSize: "20px" }}>Available Phone Categories</spam>
          <div className="prodcut-detail-Outer">
            <div className="product-detail-Container">
              <ButtonGroup
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Row xs={1} md={4}>
                  {" "}
                  {productTypes
                    .filter(
                      (category) =>
                        category.product_id === id && category.quantity !== 0
                    )
                    .map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? "outline-dark" : "outline-dark"}
                        name="radio"
                        value={radio.category}
                        checked={radioValue === radio.category}
                        onChange={(e) => handleCategoryChange(e)}
                        style={{
                          minHeight: "25px",
                          fontSize: "18px",
                          minWidth: "150px",
                          padding: "15px",
                          margin: "5px",
                          textAlign: "center",
                          border: "solid 4px",
                        }}
                      >
                        {radio.category}
                      </ToggleButton>
                    ))}
                </Row>
              </ButtonGroup>
            </div>
          </div>
          <h4>Price - $ {price}</h4>
          <spam style={{ color: "red", fontSize: "15px" }}>{errorMessage}</spam>
          <div className="Add-to-Cart">
            <Button
              style={{ maxWidth: "300px", marginBottom: "20px" }}
              onClick={() => {
                if (radioValue) {
                  addToCart({ ...updatedproduct, id });
                  history.push("/cart");
                } else {
                  setErrorMessage("please choose the phone Category");
                }
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;

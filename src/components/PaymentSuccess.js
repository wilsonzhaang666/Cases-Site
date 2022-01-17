import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { mobile } from "../responsive";
const PaymentSuccess = () => {
  const Notification = styled.div`
    height: 10em;
    position: relative;
  `;
  const Notice = styled.span`
    font-size: 25px;
    text-align: center;
    padding: 30px;
    position: absolute;
    text-alignment: center;
    top: 240%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  `;
  const Engagement = styled.p`
    font-weight: light;
    font-size: 20px;
    color: grey;
    margin: 0;
    position: absolute;
    top: 420%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Notification>
      <Notice>
        Congratulations! Your Order has been successfully Created✨✨
      </Notice>
      <Engagement>
        <Link to="/">
          <p
            style={{
              margin: "5px",
              color: "#6a6c7e",
            }}
          >
            {" "}
            Continue Shopping🛒
          </p>
        </Link>
      </Engagement>
    </Notification>
  );
};

export default PaymentSuccess;

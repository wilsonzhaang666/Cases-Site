import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Paper, Button, TextField } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
const FormContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
`;
const InnerContainer = styled.div`
  width: 960px;
  min-height: 70vh;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 177px 130px 33px 95px;
`;
const LoginTitle = styled.div``;
const LogoContainer = styled.div`
  width: 316px;
  width: 50%;
  margin: 0 auto;
  item-align: center;
`;
const ContainerForForm = styled.div`
  min-width: 200px;
  width: 50%;
  margin: 0 auto;
`;
const WrapInput = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
`;
const InputContainer = styled.input`
  font-family: Poppins-Medium;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  border: none;
  display: block;
  width: 100%;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
`;
const IconsContainer = styled.span`
  font-size: 18px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  border-radius: 25px;
  bottom: 0;
  right: 10px;
  width: 100%;
  height: 100%;
  padding-left: 35px;
  pointer-events: none;
  color: #666666;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;
const TitleContainer = styled.span`
  font-family: Poppins-Bold;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  padding-bottom: 12px;

  width: 100%;
  display: block;
`;
const SubTitleContainer = styled.span`
  font-family: Poppins-Bold;
  font-size: 12px;
  color: #9796a8;
  line-height: 1.2;
  text-align: center;

  width: 100%;
  display: block;
  padding-bottom: 54px;
`;
const ButtonCotainer = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
`;

const SignInButton = styled.button`
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;

  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #4dc8d2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  border: none;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;
const SignUpContainer = styled.div`
  text-align: center;
  padding-top: 136px;
`;
const ErrorContainer = styled.div`
  text-align: center;
  color: red;
  width: 50%;
  margin: 0 auto;
`;
const ConfirmForgotReset = ({ onConfirmForgotReset }) => {
  const location = useLocation();
  const [code, setCode] = useState("");
  const [new_password, setNewPassword] = useState("");
  const username = location.state.username;
  const [errorText, setErrorText] = useState("");

  const history = useHistory();
  const confirmResetPassword = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.forgotPasswordSubmit(username, code, new_password)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      const password = new_password;
      const login = await Auth.signIn(username, password);

      history.push("/");
      window.location.reload(false);

      onConfirmForgotReset();
    } catch (error) {
      setErrorText("error occur:" + error.message);
    }
  };

  return (
    <FormContainer className="login">
      <InnerContainer>
        <LogoContainer>
          <img
            src={require("../assets/SiteLogo.png")}
            style={{
              marginLeft: "-50px",
              minWidth: "240px",
              maxWidth: "100%",
              marginTop: "-120px",
            }}
          />
        </LogoContainer>
        <ContainerForForm>
          <form onSubmit={confirmResetPassword}>
            <TitleContainer class="login100-form-title">
              Confirm Sign Up
            </TitleContainer>
            <SubTitleContainer class="login100-form-title">
              Please Input the Code that we send to your email
            </SubTitleContainer>
            <ErrorContainer>{errorText}</ErrorContainer>
            <WrapInput>
              <InputContainer
                id="code"
                label="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Confirm Code"
              />
              <IconsContainer>
                <AccountCircleOutlinedIcon style={{ fontSize: "28px" }} />
              </IconsContainer>
            </WrapInput>
            <WrapInput>
              <InputContainer
                id="newPassword"
                label="newPassword"
                type="password"
                value={new_password}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="NewPassword"
              />
              <IconsContainer>
                <AccountCircleOutlinedIcon style={{ fontSize: "28px" }} />
              </IconsContainer>
            </WrapInput>

            <ButtonCotainer>
              <SignInButton type="submit" color="primary">
                Confirm
              </SignInButton>
            </ButtonCotainer>
          </form>
        </ContainerForForm>
      </InnerContainer>
    </FormContainer>
  );
};

export default ConfirmForgotReset;

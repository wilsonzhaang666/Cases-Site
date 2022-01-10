import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Paper, Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
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
  padding: 0 30px 0 15px;
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

const SignUpButton = styled.button`
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;

  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #f18a91;
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
const TitleForSection = styled.span`
  margin: 10px;
  font-size: 20px;
`;
const ErrorContainer = styled.div`
  margin: 8px;
  text-align: center;
  color: red;
`;
const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [errorText, setErrorText] = useState("");
  const signIn = async (e) => {
    if (password === confirmpassword && confirmpassword !== "") {
      e.preventDefault();
      try {
        const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
            email, // optional
            // optional - E.164 number convention
            // other custom attributes
          },
        });
        history.push({
          pathname: "/confirm",
          state: {
            username: username,
            password: password,
          },
        });

        onRegister();
      } catch (error) {
        setErrorText("error occur" + error);
      }
    } else {
      setErrorText("Please Type The Same Password Twice");
    }
  };

  return (
    <FormContainer className="login">
      <InnerContainer>
        <LogoContainer>
          <img
            src={require("../assets/SiteLogo.png")}
            style={{
              marginLeft: "-70px",
              minWidth: "240px",
              maxWidth: "100%",
              marginTop: "-120px",
            }}
          />
        </LogoContainer>
        <ContainerForForm>
          <form onSubmit={signIn}>
            <TitleContainer class="login100-form-title">
              Registration
            </TitleContainer>
            <SubTitleContainer class="login100-form-title">
              Welcome To Cases.Site
            </SubTitleContainer>
            <ErrorContainer>{errorText}</ErrorContainer>
            <WrapInput>
              <TitleForSection>Username</TitleForSection>

              <InputContainer
                id="username"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <IconsContainer></IconsContainer>
            </WrapInput>
            <WrapInput>
              <TitleForSection>Email</TitleForSection>

              <InputContainer
                id="email"
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <IconsContainer></IconsContainer>
            </WrapInput>
            <WrapInput>
              <TitleForSection>Password</TitleForSection>

              <InputContainer
                id="password"
                label="Password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <IconsContainer></IconsContainer>
            </WrapInput>
            <WrapInput>
              <TitleForSection>Confirm Password</TitleForSection>

              <InputContainer
                id="confirmpassword"
                label="confirmpassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
              <IconsContainer></IconsContainer>
            </WrapInput>
            <ButtonCotainer>
              <SignUpButton type="submit" color="primary">
                Register
              </SignUpButton>
            </ButtonCotainer>
          </form>
        </ContainerForForm>
      </InnerContainer>
    </FormContainer>
  );
};

export default Register;

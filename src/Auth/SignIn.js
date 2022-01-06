import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Paper, Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Signin = ({ onSignin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      history.push("/");
      onSignin();
    } catch (error) {
      console.log("error signing in", error);
    }
  };
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
  return (
    <FormContainer className="login">
      <InnerContainer>
        <TextField
          id="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="signinButton" color="primary" onClick={signIn}>
          Sign In
        </Button>
      </InnerContainer>
    </FormContainer>
  );
};

export default Signin;

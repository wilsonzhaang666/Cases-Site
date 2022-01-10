import React from "react";
import styled from "styled-components";

const Notification = styled.div`
  height: 10em;
  position: relative;
`;
const Notice = styled.h1`
  margin: 0;
  position: absolute;
  top: 250%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
const Engagement = styled.p`
  font-weight: light;
  font-size: 14px;
  color: grey;
  margin: 0;
  position: absolute;
  top: 280%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;
const Error = () => {
  return (
    <Notification>
      <Notice>Opps</Notice>
      <Engagement>Error Page! </Engagement>
    </Notification>
  );
};

export default Error;

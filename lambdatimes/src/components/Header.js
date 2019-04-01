import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const Hdiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 81%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
`;

const Date = styled.span`
  margin-left: 25px;
  flex: 1;
`;

const Temp = styled.span`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;
const Header = () => {
  return (
    <Hdiv>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </Hdiv>
  );
};

export default Header;

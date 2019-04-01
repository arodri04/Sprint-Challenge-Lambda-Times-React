import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const TB = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TBC = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const TBCL = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TBCLS = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const TBCC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const TBCCS = styled.span`
  cursor: pointer;
  margin-right: 5%;
`;
const TBCR = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const TopBar = () => {
  return (
    <TB>
      <TBC>
        <TBCL>
          <TBCLS>TOPICS</TBCLS>
          <TBCLS>SEARCH</TBCLS>
        </TBCL>
        <TBCC>
          <TBCCS>GENERAL</TBCCS>
          <TBCCS>BROWNBAG</TBCCS>
          <TBCCS>RANDOM</TBCCS>
          <TBCCS>MUSIC</TBCCS>
          <TBCCS>ANNOUNCEMENTS</TBCCS>
        </TBCC>
        <TBCR>
          <span>LOG IN</span>
        </TBCR>
      </TBC>
    </TB>
  );
};

export default TopBar;

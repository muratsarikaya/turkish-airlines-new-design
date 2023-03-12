import Logo from "./Logo";

import styled from "styled-components";
import MainNavigation from "./MainNavigation";

const HeaderBottomDiv = styled.div`
  background-color: #232b38;
  height: 60px;
  text-align: left;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBottom = (props) => {
  return (
    <>
      <HeaderBottomDiv>
        <Logo />
        <MainNavigation />
      </HeaderBottomDiv>
    </>
  );
};

export default HeaderBottom;

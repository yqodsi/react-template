import React from "react";
import styled from "styled-components";

const StyledSideNav = styled.div`
  & {
    height: 100vh;
    width: 20rem;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

const SideNav = () => {
  return <StyledSideNav>SideNav</StyledSideNav>;
};

export default SideNav;

import React from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const StyledNav = styled.div`
  & {
    z-index: 2;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;const
    top: 0;
    right: 0;
    width: calc(100vw - 20rem);
    height: 5rem;
    box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }
`;
const Nav = () => {
  return (
    <StyledNav>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </StyledNav>
  );
};

export default Nav;

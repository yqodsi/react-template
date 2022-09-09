import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Button, Switch } from "@mui/material";
import SideNav from "../side-nav";
import Nav from "../nav";
import RouterView from "../router-view";
const StyledMain = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => (props.darkmode ? "#000" : "#fff")};
  color: ${(props) => (props.darkmode ? "#fff" : "#000")};
  .router-view {
    position: absolute;
    height: 100vh;
    top: 0;
    right: 0;
    width: calc(100vw - 20rem);
    transition: all 0.5s ease;
    padding: 5rem 0 0 0;
  }
`;

const Main = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <StyledMain darkmode={theme.darkMode || false}>
      <SideNav />
      <Nav />
      <div className="router-view">
        <RouterView />
      </div>
    </StyledMain>
  );
};

export default Main;

import React from 'react';
import {Search, LocationOn} from "@material-ui/icons";
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: inherit;
  text-decoration: inherit;
`;

const Center = styled.a`
  flex: 1;
  text-align: center;
  color: inherit;
  text-decoration: inherit;
`;

const Logo = styled.h1`
  font-weight: bold;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <LocationOn/>
                    <SearchContainer>
                        <Input placeholder="Enter your location"/>
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                    <SearchContainer>
                        <Input placeholder="Enter your event type"/>
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center href="/"><Logo>EVENT.</Logo></Center>
                <Right>
                    <MenuItem href="/register">REGISTER</MenuItem>
                    <MenuItem href="/login">SIGN-IN</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
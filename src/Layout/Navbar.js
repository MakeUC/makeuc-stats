import React from 'react';
import styled from 'styled-components';

export function Navbar() {
  return(
    <Nav>
      <Logo href="https://stats.makeuc.io">
        <img src="https://github.com/MakeUC/makeuc-stats/blob/nishil-dev-2022/public/logo_2022.png?raw=true" alt="MakeUC"/>
      </Logo>
      <MakeUCButton href="https://makeuc.io/">Main Website</MakeUCButton>
    </Nav>
  );

}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const MakeUCButton = styled.a`
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000000;
    text-decoration: none;
  }
`;
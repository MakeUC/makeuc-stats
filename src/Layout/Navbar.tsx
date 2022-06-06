import React from 'react';
import { LinkButton } from '../Components/LayoutComponents';
import styled from 'styled-components';

import LogoImage from '../assets/logo_2022.png';

export function Navbar() {
  return(
    <Nav>
      <Logo href="https://stats.makeuc.io">
        <img src={LogoImage} alt="MakeUC"/>
      </Logo>
      <LinkButton href="https://makeuc.io/">Main Website</LinkButton>
    </Nav>
  );

}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 140px;
  margin-top: 4px;
  max-height: 200px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;
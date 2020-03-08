import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import theme from '../../theme';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { breakpoints } from '../../lib/breakpoints';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    -webkit-transform: translate3d(100%, 0, 0); }
  5% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
  }
`;

const StyledNav = styled.nav`
  max-width: 400px;
  width: 100%;

  ${props => props && props.pocketNav === true && css`
    display: flex !important;

    & ul {
      animation: ${slideIn} .55s ease-in-out;
    }
  `}

  @media ${breakpoints.navFlip} {
    display: none;
    top: 0;
    position: fixed;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
    z-index: 10;
    -webkit-backface-visibility: hidden;
    justify-content: flex-end;
  }

  ul {
    display: flex;
    padding: 0;
    margin: 0;

    @media ${breakpoints.navFlip} {
      width: 75vw;
      position: relative;
      max-width: 300px;
      display: block;
      background: ${theme.black};
      height: 100%;
      min-height: 100vh;
      box-shadow: 0 0 10px rgba(22,22,22,0.25);
      padding: 100px 0 115px 0;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }

  li {
    margin: auto;
    font-family: 'Horatio';
    font-size: 1.125rem;
    color: ${theme.gray};
    letter-spacing: 0.071875rem;
    line-height: 1.625rem;

    @media ${breakpoints.navFlip} {
      color: #fff;
      padding: 15px 0 15px 20px;

      & a {
        color: #fff;
      }
    }
  }
`;

const Nav = ({ pocketNav, setNav }) => {
  const close = () => {

    setTimeout(() => {
      return setNav(false);
    }, 1000);
  }
  return (
    <StyledNav className="nav" pocketNav={pocketNav}>
      <ul>
        <li><AnchorLink href="#services" onClick={() => close()}>Services</AnchorLink></li>
        <li><AnchorLink href="#about" onClick={() => close()}>About</AnchorLink></li>
        <li><AnchorLink href="#work" onClick={() => close()}>Work</AnchorLink></li>
        <li><AnchorLink href="#contact" onClick={() => close()}>Contact</AnchorLink></li>
      </ul>
    </StyledNav>
  );
}

export default Nav;
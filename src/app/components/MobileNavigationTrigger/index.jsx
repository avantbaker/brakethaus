import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const StyledTrigger = styled.div`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  cursor: pointer;
  position: relative;
  height: 48px;
  width: 48px;
  background: transparent;
  z-index: 1000;
  transition: all .35s ease-out;
  position: absolute;
  right: 15px;

  @media screen and (min-width: 701px) {
    display: none;
  }

  span {
    position: absolute;
    right: 0;
    top: 50%;
    height: 2px;
    width: 24px;
    background: ${theme.black};
    transition: all .35s;

    &:nth-of-type(1) {
      transform: translateY(-10px);
    }

    &:nth-of-type(2) {
      transform: translate(0, -4px);
    }

    &:nth-of-type(3) {
      transform: translateY(2px);
    }

    &:nth-of-type(4) {
      opacity: 0;
      transform: translate(12px, -4px);
    }
  }

  ${props => props.active && css`
    position: fixed;

    & .wrapper {
      transform: rotate(180deg);
    }

    & span {
      background: #fff;

      &:nth-of-type(1) {
        transform: translateY(0) rotate(-45deg);
      }

      &:nth-of-type(2) {
        opacity: 0;
      }

      &:nth-of-type(3) {
        transform: translateY(0) rotate(45deg);
      }
    }
  `}
`;


const MobileNavigationTrigger = ({ onTriggerClick, active }) => {
  return (
    <StyledTrigger onClick={() => onTriggerClick()} active={active}>
      <span />
      <span />
      <span />
      <span />
    </StyledTrigger>
  );
};

export default MobileNavigationTrigger;
import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';

const StyledButton = styled.button`
  background: #fff;
  height: 54px;
  line-height: 54px;
  box-shadow: 0 2px 10px 5px rgba(0,0,0,0.05);
  border-radius: 41px;
  font-size: 13px;
  color: ${theme.black};
  letter-spacing: 0.98px;
  text-align: center;
  border: 0;
  cursor: pointer;
  min-width: 150px;
  padding: 0 10px;
  text-transform: uppercase;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.8;
    transition: all 0.25s;
  }

  ${props => props && props.background && css`
    background: ${props.background};
    color: #fff;
  `}
`;

const Button = ({ children, onClick, background }) => (
  <StyledButton background={background} onClick={() => onClick()}>
    {children}
  </StyledButton>
);

export default Button;

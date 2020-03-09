import styled from 'styled-components';
import { breakpoints } from '../lib/breakpoints';
import theme from '../theme';

const Close = styled.div `
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 40px;
  width: 40px;
  background: transparent;
  border-radius: 3px;
  z-index: 1000;
  transition: all 0.35s ease-out;

  span {
    position: absolute;
    right: 0;
    top: 50%;
    height: 2px;
    width: 40px;
    background: ${theme.gray};
    transition: all 0.35s;

    &:nth-of-type(1) {
      transform: translateY(0) rotate(-45deg);
    }

    &:nth-of-type(2) {
      transform: translateY(0) rotate(45deg);
    }
  }

  @media ${breakpoints.tablet} {
    & span {
      background: #fff;
    }
  }
`;

export default Close;
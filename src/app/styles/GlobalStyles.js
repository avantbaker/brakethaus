import { createGlobalStyle } from 'styled-components';
import { breakpoints } from '../lib/breakpoints';
import theme from '../theme';
import horatioWoff2 from '../static/HoratioLTStd-Bold.woff2';
import horatioWoff from '../static/HoratioLTStd-Bold.woff';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: "Horatio";
    src: url(${horatioWoff2}),
        url(${horatioWoff});
  }

  html {
    font-family: Helvetica, sans-serif;
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 100%;
    color: ${theme.black};

    &.noScroll {
      /* position: fixed; */
      /* width: 100%; */
    }
  }

  /* typography */

  h1 {
    margin: 0 0 20px 0;

    &.display {
      font-family: "Horatio", sans-serif;
      font-size: 6rem;
      letter-spacing: 0.215rem;
      line-height: 5.875rem;
      font-weight: 400;

      @media ${breakpoints.tablet} {
        font-size: 4.5rem;
        line-height: 4.5rem;
      }

      @media ${breakpoints.navFlip} {
        font-size: 3.5rem;
        line-height: 3.5rem;
      }
    }
  }

  h3 {
    font-family: "Horatio", sans-serif;
    font-size: 2.75rem;
    letter-spacing: 2.2px;
    line-height: 40px;
  }

  h4 {
    font-size: 1.4375rem;
    color: ${theme.textGray};
    font-weight: 300;
    letter-spacing: 0;
  }

  p {
    font-size: 1.5rem;
    letter-spacing: 0;
    line-height: 2.25rem;

    @media ${breakpoints.tablet} {
      font-size: 1.25rem;
      line-height: 2rem;
    }

    &.gray {
      color: ${theme.textGray}
    }

    &.small {
      font-size: 1rem;
      letter-spacing: 0;
      line-height: 1.8rem;
    }
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    transition: all 0.25s;
    color: ${theme.black};

    &:hover {
      color: ${theme.red};
    }

    &.underline {
      text-decoration: underline;
    }
  }

  .button {
    background: #fff;
    display: inline-block;
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
      color: ${theme.black};
    }
  }

  /* form elements */

  ::placeholder {
    font-size: 13px;
  }

  /* helpers */

  .hideForMobile {
    @media ${breakpoints.mobile} {
      display: none !important;
    }
  }

  .showForMobile {
    display: none !important;

    @media ${breakpoints.mobile} {
      display: block !important;
    }
  }
`;

export default GlobalStyles;


import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import { breakpoints } from '../../lib/breakpoints';
import { Row } from '../../styles';
import Button from '../Button';

const StyledWorkCallout = styled.div`
  display: flex;
  position: relative;
  min-height: 495px;
  box-shadow: 10px 16px 36px 19px rgba(0,0,0,0.04);
  max-width: 85%;
  margin: 0 auto 200px auto;

  h3 {
    margin: 10px 0;
  }

  .columnCallout {
    flex-basis: 55%;
    max-width: 55%;

    &:first-of-type {
      background: ${props => props.color};
    }
  }

  .row {
    margin: -2px;
  }

  .logo {
    padding: 45px;
    border-radius: 9px 0 0 9px;
  }

  .content {
    flex-basis: 45%;
    max-width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    background: #fff;
    padding: 0 40px;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;

    & p {
      color: ${theme.textGray};
      font-size: 0.875rem;
      letter-spacing: 0;
      line-height: 1.5rem;
    }
  }

  .workImage {
    position: absolute;
    top: 200px;
    left: -100px;
    width: 60%;

    img {
      width: 100%;
    }

    @media screen and (max-width: 1100px) {
      left: -50px;
    }

  }

  button {
    position: absolute;
    bottom: -15px;
    right: -40px;
  }

  @media ${breakpoints.tablet} {
    margin-bottom: 40px;
    max-width: 100%;
    flex-direction: column;
  

    .columnCallout {
      max-width: 100%;
      flex-basis: 100%;
      border-radius: 9px;
    }

    .logo {
      border-radius: 9px 9px 0 0;
      padding: 40px 20px;
    }

    .content {
      border-radius: 0 0 9px 9px;
      padding: 25px;
    }

    .workImage {
      display: none;
      width: 400px;
      max-width: 400px;
    }

    button, .workImage {
      position: initial;
    }
  }

  ${props => props.fullScreen && css`
    max-width: 100%;
    margin: 0;

    .logo {
      border-radius: 0;
      padding: 40px 20px;
      justify-content: space-between;
    }

    .content {
      border-radius: 0;
      padding: 25px;
    }

    .workImage {
      width: 100%;
      max-width: 100%;
      position: initial;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 800px;
      margin-bottom: 40px;

      & img {
        max-width: 600px;
      }
    }

    button {
      display: none;
    }

    @media ${breakpoints.tablet} {
      margin: 0;

      .columnCallout {
        max-width: 100%;
        flex-basis: 100%;
      }

      .logo {
        height: 450px;
      }

      .close {
        span {
          background: #fff;
        }
      }
    }
  `}

  @media ${breakpoints.minTablet} {
    ${props => props.inverted === true && css`
      .logo {
        order: 2;
        border-radius: 0 9px 9px 0;
      }

      .content {
        order: 1;
        border-radius: 9px 0 0 9px;
      }

      button {
        right: initial;
        left: -40px;
      }

      .workImage {
        left: initial;
        right: -100px;
      }

      .close {
        span {
          background: #fff;
        }
      }
    `}
  }
`;

const WorkCallout = ({ logo, image, color, children, fullScreen, link, openModal, inverted }) => {

  return (
    <StyledWorkCallout color={color} fullScreen={fullScreen} inverted={inverted}>
      <Row className="row">
        <div className="columnCallout logo">
          <img src={logo} alt="Logo" />
          <div className="workImage"><img src={image} /></div>
        </div>
        <div className="columnCallout content">
          {children}
          <Button onClick={() => openModal()} background={color}>View Module</Button>
        </div>
      </Row>
    </StyledWorkCallout>
  )
}

export default WorkCallout;
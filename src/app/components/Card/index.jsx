import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';

const StyledCard = styled.div`
  background: #fff;
  position: relative;
  box-shadow: 8px 9px 12px 11px rgba(0,0,0,0.03);
  border-radius: 30px;
  padding: 40px;
  max-width: 545px;
  width: 100%;
  height: 418px;

  @media ${breakpoints.tablet} {
    max-width: 100%;
    margin-bottom: 100px;
    height: auto;
    min-height: 350px;
  }

  & h3 {
    margin: 10px 0;
  }

  & p {
    color: #000000;
    letter-spacing: 0;
    line-height: 35px;
  }

  & img {
    position: absolute;

    @media ${breakpoints.tablet} {
      max-width: 280px;
    }
  }

  &:first-of-type {
    padding-top: 140px;

    @media ${breakpoints.tablet} {
      margin-bottom: 50px;
    }

    & img {
      top: -70px;
      right: -70px;

      @media ${breakpoints.tablet} {
        right: 0;
      }
    }
  }

  &:nth-of-type(2) {
    
    @media ${breakpoints.minTablet} {
      margin-top: 120px;
    }

    @media ${breakpoints.tablet} {
      /* padding-bottom: 140px; */
      margin-top: 0;
    }

    & img {
      bottom: -80px;
      left: -40px;

      @media ${breakpoints.tablet} {
        left: 0;
      }
    }
  }

  &:nth-of-type(3) {
    /* padding-bottom: 120px; */
    margin-top: -100px;

    @media ${breakpoints.tablet} {
      /* padding-bottom: 120px; */
      margin-top: 0;
    }

    & img {
      bottom: -80px;
      right: 20px;

      @media ${breakpoints.tablet} {
        right: 0;
      }
    }
  }

  &:nth-of-type(4) {

    @media ${breakpoints.minTablet} {
      margin-top: 100px;
    }

    @media ${breakpoints.tablet} {
      margin-top: 0;
    }

    & img {
      bottom: -50px;
      right: 20px;

      @media ${breakpoints.tablet} {
        right: 0;
      }

      @media ${breakpoints.mobile} {
        bottom: -100px;
      }
    }
  }

`;

const Card = (props) => (
  <StyledCard {...props}>
    <h3>{props.heading}</h3>
    <p>{props.children}</p>
 
    {props.image && <img src={props.image} alt={props.heading} />}
  </StyledCard>
);

export default Card;
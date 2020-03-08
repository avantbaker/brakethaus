import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';
import Social from '../Social';
import { Container } from '../../styles';
import heroBackground from '../../static/homepage_bg.png';

const StyledHero = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;

  @media ${breakpoints.mobile} {
    height: 80vh;
  }

  .heroContent {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0 auto;
    z-index: 3;
    position: relative;

    @media ${breakpoints.mobile} {
      padding: 0 15px;
      align-items: flex-end;
      align-content: flex-end;

      & h3 {
        font-size: 2rem;
      }
    }
  }

  h3 {
    font-family: 'Horatio';
    font-size: 	3rem;
    letter-spacing: 1.72px;
    line-height: 4rem;
    margin-bottom: 0;
  }
  
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100vh; */
    z-index: -1;
    
    @media ${breakpoints.tablet} {
      height: auto;
    }

    @media ${breakpoints.mobile} {
      width: 120vw;
    }
  }
`;

const HeroHomepage = () => {
  return (
    <StyledHero>
        <div className="heroContent">
          <h3 className="display">Crafted, Consumer-First</h3>
          <h1 className="display">Digital Experiences</h1>
        </div>

      <Social />
      <img src={heroBackground} alt="Hero Background" />
    </StyledHero>
  );
}

export default HeroHomepage;

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';
import background from '../../static/caret_background.png';

const StyledFullWidthCallout = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 600px;

  .content {
    color: #fff;
    flex-basis: 70%;
    max-width: 70%;
    min-height: 100%;
    background: url(${background}) center center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    & .inner {
      padding: 0 60px;
    }
  }

  .image {
    flex-basis: 30%;
    max-width: 30%;
    background: url(${(props => props.image)}) center center no-repeat;
    min-height: 100%;
    background-size: auto 100%;
  }

  @media ${breakpoints.tablet} {
    height: auto;
    flex-direction: column;

    .content, .image {
      flex-basis: 100%;
      max-width: 100%;
      min-height: 300px;
    }

    .image {
      order: 1;
      background-size: 100% auto;
    }

    .content {
      order: 2;
      min-height: 500px;
    }
  }
`;

const FullWidthCallout = ({ heading, children, image, link }) => (
  <StyledFullWidthCallout image={image}>
    <div className="content">
      <div className="inner">
        <h1 className="display">{heading}</h1>
        <p>{children}</p>
        <AnchorLink href="#contact" className="button">Get in Touch</AnchorLink>
      </div>
    </div>
    <div className="image" />
  </StyledFullWidthCallout>
);

export default FullWidthCallout;


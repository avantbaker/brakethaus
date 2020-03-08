import React from 'react';
import styled from 'styled-components';
import { Row, Container, Section } from '../../styles';
import Card from '../Card';
import { breakpoints } from '../../lib/breakpoints';
import mobility from '../../static/mobility.png';
import craft from '../../static/craft.png';
import feel from '../../static/feel.png';
import ease from '../../static/ease.png';

const StyledPhilosophySection = styled(Section)`

  .sectionHeading {
    justify-content: flex-end;

    .column {
      text-align: right;
    }

    @media ${breakpoints.tablet} {
      justify-content: flex-start;

      .column {
        text-align: left;
      }
    }
  }

  .column {
    flex-basis: 50%;
    max-width: 50%;
    margin-bottom: 30px;

    @media ${breakpoints.tablet} {
      flex-basis: 100%;
      max-width: 100%;
    }
  }

  .cardWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px 120px;
 
    @media screen and (max-width: 1100px) {
      grid-gap: 50px;
    }

    @media ${breakpoints.tablet} {
      grid-template-columns: 1fr;
      grid-gap: 0;
      margin-top: 100px;
    }
  }
`

const PhilosophySection = () => (
  <StyledPhilosophySection id="about">
    <Container>
      <Row className="sectionHeading">
        <div className="column">
          <h1 className="display">Philosophy</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et arcu et ex pulvinar consequat.</p>
        </div>
      </Row>
      <div className="cardWrapper">
        <Card heading="Mobility" image={mobility}>
          80% of traffic on the internet comes from the palms of our hands. We pay special attention to meet your users wherever they are with the best experience possible.
        </Card>
        <Card heading="Craft" image={craft}>
          Consistency is key. It's what users expect. It's what we demand. Our code does what it's supposed to. Period.
        </Card>
        <Card heading="Feel" image={feel}>
          Attention to detail is paramount. Down to the interaction. We use animation and feedback to conduct a symphony of information that feels amazing.
        </Card>
        <Card heading="Ease" image={ease}>
          An app or site should have the user first in mind. We take great care to make sure that not only do our interfaces look stunning but are first and foremost easy to use.
        </Card>
      </div>
    </Container>
  </StyledPhilosophySection>
);

export default PhilosophySection;
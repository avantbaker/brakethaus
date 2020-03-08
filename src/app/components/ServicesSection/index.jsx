import React, { useState } from 'react';
import styled from 'styled-components';
import { Section, Container, Row } from '../../styles';
import technologiesLogos from '../../static/techologies_logos.png';
import AccordionItem from '../AccordionItem';
import { breakpoints } from '../../lib/breakpoints';

const StyledServicesSection = styled(Section)`
  padding-top: 200px;
  
  .row {
    justify-content: center;
    align-items: center;
  }

  .column {
    flex-basis: 50%;
    max-width: 50%;

    @media ${breakpoints.tablet} {
      flex-basis: 100%;
      max-width: 100%;

      &:first-of-type {
        order: 2;
      }
    }

    &:nth-of-type(2) {
      justify-content: flex-end;

    }

    & .calloutImage {
      max-width: 100%;

      @media ${breakpoints.tablet} {
        max-width: 350px;
        display: block;
        margin: 0 auto;
      }
    }
  }
`;

const ServicesSection = () => {
  const [openIndex, openAccordion] = useState(3);
  return (
    <StyledServicesSection id="services">
      <Container>
        <Row className="row">
          <div className="column">
            <h1 className="display">Full Service Creative</h1>
            <AccordionItem title="Web Consulting" open={openIndex === 1} openAccordion={() => openAccordion(openIndex === 1 ? 0 : 1)}>
              <p>We use cutting edge technology to propel you to the forefront of your industry. Our aim is to make our work flexible, adaptable and strong to meet the ever changing needs of your business</p>

              <p>We use cutting edge technology to propel you to the forefront of your industry. Our aim is to make our work flexible, adaptable and strong to meet the ever changing needs of your business</p>
            </AccordionItem>
            <AccordionItem title="UX/UI Design" open={openIndex === 2} openAccordion={() => openAccordion(openIndex === 2 ? 0 : 2)}>
              <p>We use cutting edge technology to propel you to the forefront of your industry. Our aim is to make our work flexible, adaptable and strong to meet the ever changing needs of your business</p>

              <p>We use cutting edge technology to propel you to the forefront of your industry. Our aim is to make our work flexible, adaptable and strong to meet the ever changing needs of your business</p>
            </AccordionItem>
            <AccordionItem title="Web/App Development" open={openIndex === 3} openAccordion={() => openAccordion(openIndex === 3 ? 0 : 3)}>
              <p>We use cutting edge technology to propel you to the forefront of your industry. Our aim is to make our work flexible, adaptable and strong to meet the ever changing needs of your business</p>

              <ul>
                <div>
                  <li>React</li>
                  <li>Vue</li>
                  <li>Docker</li>
                </div>
                <div>
                  <li>AWS</li>
                  <li>GraphQL</li>
                  <li>Wordpress</li>
                </div>
              </ul>
            </AccordionItem>
          </div>
          <div className="column">
            <img className="calloutImage" src={technologiesLogos} alt="Technologies" />
          </div>
        </Row>
      </Container>
    </StyledServicesSection>
  )
};

export default ServicesSection;
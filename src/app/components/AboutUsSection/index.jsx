import React from 'react';
import styled from 'styled-components';
import { Section, Container } from '../../styles';
import image from '../../static/priscilla-du-preez-XkKCui44iM0-unsplash.jpg';
import FullWidthCallout from '../FullWidthCallout';

const AboutUsSection = () => (
  <Section>
    <Container>
      <FullWidthCallout heading="About Us" image={image}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae dignissim lacus. Pellentesque hendrerit facilisis ex, sed sollicitudin metus gravida nec. Nulla commodo purus neque, interdum rhoncus dui pretium vel.
      </FullWidthCallout>
    </Container>
  </Section>
);

export default AboutUsSection;
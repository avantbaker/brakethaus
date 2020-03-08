import styled from 'styled-components';
import { breakpoints } from '../lib/breakpoints';

const Section = styled.section`
  width: 100%;
  padding: 80px 24px;
  z-index: 100;

  @media ${breakpoints.mobile} {
    padding: 32px 15px;
  }
`;

export default Section;
import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { Section, Container, Row } from '../../styles';
import recentWorkLogos from '../../static/recent_work_logos.png';
import { breakpoints } from '../../lib/breakpoints';
import WorkCallout from '../WorkCallout';
import Modal from '../Modal';

// images
import taoLogo from '../../static/tao_group_logo.png';
import taoIpad from '../../static/tao_ipad.png';
import sterlingLogo from '../../static/sterling_logo.png';
import sterlingIpad from '../../static/sterling_ipad.png';
import hartLogo from '../../static/hart_advisors_logo.png';
import hartIpad from '../../static/hart_realty_ipad.png';

const StyledRecentWorkSection = styled(Section)`

  .column {
    flex-basis: 50%;
    max-width: 50%;

    @media ${breakpoints.tablet} {
      flex-basis: 100%;
      max-width: 100%;

      &:first-of-type {
        order: 2;
        margin-bottom: 40px;
      }
    }

    & img {
      max-width: 100%;

      @media ${breakpoints.tablet} {
        max-width: 350px;
        display: block;
        margin: 0 auto;
      }
    }
  }
`;

const RecentWorkSection = () => {
  const [openIndex, setModal] = useState(0);

  return (
    <StyledRecentWorkSection id="work">
      <Container>
        <Row>
          <div className="column">
            <h1 className="display">Recent Work</h1>
            <p>We partner with like-minded companies and brands that seek optimal performance and good looking solutions</p>
            
            <p className="small">Our most recent clients include: <br /> Visual Soldiers, a design agency building custom web experiences. <br /> Travel Syndication Technologies, lorem ipsum dolor. <br /> Autotrader, lorem ipsum dolor sic amet consectetur.</p>
          </div>
          <div className="column">
            <img src={recentWorkLogos} alt="Recent Work Logos" />
          </div>
        </Row>
        <WorkCallout color="#111819" image={taoIpad} logo={taoLogo} openModal={() => setModal(openIndex === 1 ? 0 : 1)}>
          <h3>Tao Group Hospitality</h3>
          <h4>Events Calendar Module</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>

          <Modal open={openIndex === 1} closeModal={() => setModal(0)}>
            <WorkCallout color="#111819" image={taoIpad} logo={taoLogo} fullScreen>
              <h3>Tao Group Hospitality</h3>
              <h4>Events Calendar Module</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
            </WorkCallout>
          </Modal>
        </WorkCallout>
        <WorkCallout color="#1F4CFF" image={sterlingIpad} logo={sterlingLogo} openModal={() => setModal(openIndex === 2 ? 0 : 2)} inverted>
          <h3>Sterling Organization</h3>
          <h4>Properties Integration</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>

          <Modal open={openIndex === 2} closeModal={() => setModal(0)}>
            <WorkCallout color="#1F4CFF" image={sterlingIpad} logo={sterlingLogo} fullScreen inverted>
              <h3>Sterling Organization</h3>
              <h4>Properties Integration</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
            </WorkCallout>
          </Modal>
        </WorkCallout>

        <WorkCallout color="#D18E26" image={hartIpad} logo={hartLogo} openModal={() => setModal(openIndex === 3 ? 0 : 3)}>
          <h3>Hart Advisors</h3>
          <h4>Properties Integration</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>

          <Modal open={openIndex === 3} closeModal={() => setModal(0)}>
            <WorkCallout color="#D18E26" image={hartIpad} logo={hartLogo} fullScreen>
              <h3>Hart Advisors</h3>
              <h4>Properties Integration</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id massa ligula. Duis congue arcu et ex pulvinar consequat. Donec nibh ex, suscipit ac rhoncus a, mollis ut libero.</p>
            </WorkCallout>
          </Modal>
        </WorkCallout>
      </Container>
    </StyledRecentWorkSection>
  )
};

export default RecentWorkSection;
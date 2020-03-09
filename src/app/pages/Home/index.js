import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';
import Page from '../../components/Page';
import HeroHomepage from '../../components/HeroHomepage';
import ServicesSection from '../../components/ServicesSection';
import PhilosophySection from '../../components/PhilosophySection';
import AboutUsSection from '../../components/AboutUsSection';
import RecentWorkSection from '../../components/RecentWorkSection';

// backgrounds
import background from '../../static/homepage_bg_top.png';
import backgroundMiddle from '../../static/homepage_bg_md.png';
import backgroundBottom from '../../static/homepage_bg_bottom.png';

const StyledHome = styled.div`
  position: relative;

  .backgrounds {
    position: absolute;
    width: 100%;
    z-index: -2;
    top: 0;
    right: 0;

    & img {
      width: 100%;
      margin-bottom: 50px;

      &:nth-of-type(2) {
        margin-bottom: 950px;
      }
    }

    @media ${breakpoints.mobile} {
      & img {
        display: none;
      }

      background: #F5F5F5;
    }
  }
`;

const Home = () => (
  <StyledHome>
    <Page>
      <HeroHomepage />
      <ServicesSection />
      <PhilosophySection />
      <AboutUsSection />
      <RecentWorkSection />
    </Page>

    <div className="backgrounds">
      <img src={background} alt="home background top" />
      <img src={backgroundMiddle} alt="home background middle" />
      <img src={backgroundBottom} alt="home background bottom" />
    </div>
  </StyledHome>
);

export default Home;
import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../lib/breakpoints';
import MobileNavigationTrigger from '../MobileNavigationTrigger';
import Logo from '../Logo';
import Nav from '../Nav';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 15px;
  z-index: 10;

  .headerContainer {
    height: 100%;
  }

  .headerInner {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .nav {
    display: flex;
    flex-direction: column;

    @media ${breakpoints.navFlip} {
      display: none;
      flex-direction: row;
    }
  }

  .logo {
    @media ${breakpoints.mobile} {
      max-width: 185px;
    }
  }

  .trigger {
    display: none;

    @media ${breakpoints.tablet} {
      display: block;
    }
  }
`;

const Header = () => {
  const [mobileNavActive, openPocketNav] = useState(false);
  return (
    <StyledHeader>
      <div className="headerInner">
        <Logo className="logo" />
        <MobileNavigationTrigger
          className="trigger"
          active={mobileNavActive}
          onTriggerClick={() => openPocketNav(!mobileNavActive)}
        />
        <Nav pocketNav={mobileNavActive} setNav={(bool) => openPocketNav(bool)} />
      </div>
    </StyledHeader>
  );
}

export default Header;
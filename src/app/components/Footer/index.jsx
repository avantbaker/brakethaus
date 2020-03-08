import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../theme';
import { breakpoints } from '../../lib/breakpoints';
import { Container, Section, Row } from '../../styles';
import InputField from '../InputField';
import Logo from '../Logo';
import Button from '../Button';
import footerBackground from '../../static/footer_bg.jpg';

const StyledFooter = styled(Section)`
  background: url(${footerBackground}) center center no-repeat;
  background-size: cover;
  display: flex;

  .footerColumnOne {
    flex-basis: 60%;
    max-width: 60%;

    @media ${breakpoints.mobile} {
      flex-basis: 100%;
      max-width: 100%;
    }
  }

  .footerColumnTwo {
    flex-basis: 40%;
    max-width: 40%;

    @media ${breakpoints.mobile} {
      flex-basis: 100%;
      max-width: 100%;
    }
  }

  & h1, & span, & a, & p {
    color: #fff;
  }

  & h1 {
    margin: 0 0 15px 0;
  }

  & p {
    color: ${theme.textGray};
  }

  & .contactDetails {

    & a {
      display: block;
      padding: 0 0 10px 0;
    }

    @media ${breakpoints.mobile} {
      padding-bottom: 30px;
    }
  }

  & .attribution {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    justify-content: flex-end;
    height: 135px;
    margin-top: 80px;

    .logo {
      margin-bottom: 25px;
    }

    .copyright {
      padding-bottom: 10px;
    }

    & span, a {
      font-size: 14px;
    }

    & .underline {
      padding-right: 5px;

      &:nth-of-type(2) {
        padding-left: 10px;
      }
    }
  }

  form {
    p {
      padding-bottom: 5px;
    }
  }
`;

const Footer = () => (
  <StyledFooter id="contact">
    <Container>
      <Row>
        <div className="footerColumnOne">
          <h1 className="display">Contact us</h1>

          <div className="contactDetails">
            <a href="tel:14044445555">+ 1 . 404 . 444 . 5555</a>
            <a href="mailto:hello@brackethaus.com">hello@brackethaus.com</a>
          </div>

          <div className="hideForMobile attribution">
            <Logo red />
            <div>
              <span className="copyright">Copyright, Brakethaus LLC 2020</span>
              <div>
                <Link to="terms-and-conditions" className="underline">Terms & Conditions</Link>
                <span>|</span>
                <Link to="privacy-policy" className="underline">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footerColumnTwo">
          <form>
            <p>What can we do for you?</p>

            <InputField type="text" placeholder="Name" />
            <InputField type="text" placeholder="Email" />
            <InputField type="textarea" placeholder="Message" />

            <Button type="submit">Submit</Button>
          </form>

          <div className="attribution showForMobile">
            <Logo red />
            <div>
              <span className="copyright">Copyright, Brakethaus LLC 2020</span>
              <div>
                <Link to="terms-and-conditions" className="underline">Terms & Conditions</Link>
                <span>|</span>
                <Link to="privacy-policy" className="underline">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </StyledFooter>
);

export default Footer;


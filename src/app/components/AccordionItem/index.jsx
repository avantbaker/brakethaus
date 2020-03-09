import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../theme';
import PropTypes from 'prop-types';
import caretIcon from '../../static/caret_icon.png';

const StyledAccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;


  h3 {
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: 0.79px;
    line-height: 2rem;

    &:hover {
      transition: all 0.25s;
      color: ${theme.red};
    }
  }

  p, li {
    color: ${theme.textGray};
    margin-top: 0;
  }

  img {
    margin-left: 15px;
    position: relative;
    transition: all .35s;
  }

  .content {
    display: block;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.25s;
    height: auto;
    max-height: 0;
    max-width: 80%;
  }

  li {
    list-style-type: disc;
    font-size: 1.4375rem;
    letter-spacing: 0;
    line-height: 2.25rem;
  }

  & ul {
    display: flex;

    & div {
      display: flex;
      flex-direction: column;
      flex-basis: 50%;
      max-width: 50%;
    }
  }

  ${props => props && props.open === true && css`
    h3 {
      color: ${theme.red};
    }

    .content {
      max-height: 600px;
    }

    & img {
      transform: rotate(180deg);
      transition: all .25s;
    }
  `}
`;

const AccordionItem = ({ title, children, open, openAccordion }) => {

  return (
    <StyledAccordionItem open={open} onClick={() => openAccordion()}>
      <h3 onClick={() => setActive()}>{title} <img src={caretIcon} alt="Caret Icon" /></h3>
      <div className="content">
        {children}
      </div>
    </StyledAccordionItem>
  )
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AccordionItem;
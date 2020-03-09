import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../../theme';
import fixWindow from '../../lib/fixWindow';
import { Close } from '../../styles';

const show = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
    z-index: -1;
  }
  to {
    transform: scale(1);
    opacity: 1;
    z-index: 2;
  }
`;

const StyledModal = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: ${theme.gray};
  z-index: 1000;
  animation: ${show} 0.25s ease-out;
  overflow-y: scroll;
`;

const Modal = ({ open, children, closeModal }) => {
  fixWindow(open);
  return (
    <StyledModal open={open}>
      {children}

      <Close onClick={() => closeModal()} className="close">
        <span />
        <span />
      </Close>
    </StyledModal>
  );
}


export default Modal;
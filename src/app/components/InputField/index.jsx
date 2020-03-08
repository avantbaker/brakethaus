import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const StyledInput = styled.div`
  position: relative;
  max-width: 450px;

  & input, & textarea {
    background: ${theme.fieldBackground};
    border-radius: 23px;
    color: ${theme.textGray};
    letter-spacing: 0;
    height: 38px;
    font-size: 14px;
    line-height: 38px;
    border: 0;
    width: 100%;
    padding: 0 10px;
    margin-bottom: 10px;

    &:focus {
      outline: 0;
    }
  }

  & textarea {
    height: 100px;
    resize: none;
  }
`;

const InputField = ({ updateValue, type, placeholder }) => {
  return (
    <StyledInput>
      {type !== 'textarea' ? <input 
        type={type}
        placeholder={placeholder}
        onChange={(evt) => evt && evt.target && evt.target.value && updateValue(evt.target.value)} /> : <textarea placeholder={placeholder}
          onChange={(evt) => evt && evt.target && evt.target.value && updateValue(evt.target.value)} />}
    </StyledInput>
  )
};

export default InputField;
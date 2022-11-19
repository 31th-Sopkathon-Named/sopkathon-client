import React from 'react';
import styled from 'styled-components';

export default function Button({ text, enabled, onClick }) {
  return (
    <StyledButton enabled={enabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => (props.enabled ? 'white' : 'black')};
  padding: 15px 42px 16px;
  border-radius: 30px;
  color: ${(props) => (props.enabled ? 'black' : 'white')};
  cursor: pointer;
`;

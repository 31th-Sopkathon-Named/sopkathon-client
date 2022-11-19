import React from 'react';
import styled from 'styled-components';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.section`
  padding: 0 1.5rem;
  height: 100vh;
  border: 1px solid black;
`;

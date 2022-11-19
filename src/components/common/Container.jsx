import React from 'react';
import styled from 'styled-components';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.section`
  height: 100vh;
`;

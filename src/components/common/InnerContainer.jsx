import React from 'react';
import styled from 'styled-components';

export default function InnerContainer({ children }) {
  return <StyledInnerContainer>{children}</StyledInnerContainer>;
}

const StyledInnerContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;

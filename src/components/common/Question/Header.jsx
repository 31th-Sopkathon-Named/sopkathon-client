import React from 'react';
import styled from 'styled-components';

export default function Header({ pageId }) {
  return (
    <StContainer>
      <StyledHeader>현규님과 짠 하는 중</StyledHeader>
      <StyledPageNum>{pageId}/4</StyledPageNum>
    </StContainer>
  );
}

const StContainer = styled.div`
  display: flex;
  gap: 171px;
  justify-content: center;
  color: white;
`;

const StyledHeader = styled.header`
  margin-top: 106px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const StyledPageNum = styled.p`
  margin-top: 106px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

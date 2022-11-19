import React, { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { userAPI, matchAPI, evaluateAPI } from '../core/api/userAPI';
import styled from 'styled-components';

import { ReactComponent as MainLogo } from '../assets/logos/mainLogo.svg';
import ClockImg from '../assets/images/miniClock.png';

// import Container from '../components/common/Container';
import Button from '../components/common/Button';

export default function Home() {
  const navigate = useNavigate();

  const handleStartButton = useCallback(() => {
    navigate('/my');
  }, []);
  useEffect(() => {
    userAPI('Yoo', 8921);
    matchAPI('Wook', 1234);
    evaluateAPI(sessionStorage.getItem('toId'), sessionStorage.getItem('fromId'), [1, 2, 3, 4]);
  }, []);
  return (
    <StyledContainer>
      <MainLogo />
      <img src={ClockImg} />
      <StyledMainText>2H</StyledMainText>
      <StyledSubText>
        사람의 마음의 변화는
        <br />
        2시간 2병 내에 결정된다.
      </StyledSubText>
      <Button text="시작하기" enabled={true} onClick={handleStartButton} />
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  /* background-image: url('../assets/images/backgroundImg.png'); */
  background-color: #32322e;
  text-align: center;
  padding-top: 143px;
  height: 100vh;

  img {
    display: block;
    margin: 17px auto 102px;
  }
`;

const StyledMainText = styled.p`
  color: white;
  font-size: 12px;
`;

const StyledSubText = styled.p`
  color: white;
  margin: 40px 0 44px;
  font-size: 12px;
  line-height: 20px;
`;

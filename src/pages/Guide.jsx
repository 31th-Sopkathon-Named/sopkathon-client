import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/common/Question/Header';

import guideImg from '../assets/images/guide.png';
import Button from '../components/common/Button';

export default function Guide() {
  const navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(true);

  const page = useParams('id');
  const nextPage = parseInt(page.id) + 1;
  console.log(page);

  const handleButton1 = () => {
    setIsClicked(false);
  };

  const handleButton2 = () => {
    if (nextPage === 5) {
      navigate('/result');
    } else {
      navigate(`/question/${nextPage}`);
    }
  };

  return (
    <StyledBackGround>
      <Header pageId={page.id} />
      <img src={guideImg} alt="가이드 이미지" />
      <StyledBtnContainer>
        <Button text="1잔 마시고 누르기" enabled={isClicked} onClick={handleButton1} />
        <Button text="2잔 마시고 누르기" enabled={!isClicked} onClick={handleButton2} />
      </StyledBtnContainer>
    </StyledBackGround>
  );
}

const StyledBackGround = styled.div`
  background-color: #32322e;
  height: 100vh;
  text-align: center;

  & > img {
    position: relative;
    top: 174px;
    width: 164.34px;
    height: 124.14px;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 320px;
`;

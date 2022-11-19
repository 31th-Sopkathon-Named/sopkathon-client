import React, { useState } from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';

import { selectAryState } from '../core/recoil/selectAryState';

import glassImage0 from '../assets/logos/icons_glass_0.svg';
import glassImage2 from '../assets/logos/icons_glass_2.svg';
import glassImage4 from '../assets/logos/icons_glass_4.svg';
import glassImage6 from '../assets/logos/icons_glass_6.svg';

import questionImg from '../assets/images/questionImg.png';

import walletImg from '../assets/images/ques_img_wallet.png';
import MenuImg from '../assets/images/ques_img_menu.png';
import ClockImg from '../assets/images/ques_img_clock.png';
import HandImg from '../assets/images/ques_img_hand.png';

import SafeImg from '../assets/images/ques_img_goto.png';
import DishImg from '../assets/images/ques_img_dish.png';
import SojuImg from '../assets/images/ques_img_soju.png';
import PhoneImg from '../assets/images/ques_img_number.png';

import ExamImg from '../assets/images/ques_img_study.png';
import XImg from '../assets/images/ques_img_love.png';
import PlanImg from '../assets/images/ques_img_week.png';
import HomeImg from '../assets/images/ques_img_home.png';

import RegretImg from '../assets/images/ques_img_regret.png';
import TaxiImg from '../assets/images/ques_img_taxi.png';
import LipsImg from '../assets/images/Frame 41.png';
import LoveImg from '../assets/images/Frame 43.png';

import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/common/Question/Header';
import Button from '../components/common/Button';

export default function Question() {
  const navigate = useNavigate();
  const [selectList, setSelectList] = useRecoilState(selectAryState);
  console.log(selectList, setSelectList);

  const [isClicked, setIsClicked] = useState(false);
  const [clickButton, setClickButton] = useState('false');

  const page = useParams('id');
  const pageNum = parseInt(page.id) - 1;
  const nextPage = page.id;

  console.log(nextPage);

  const handleButton = () => {
    navigate(`/guide/${nextPage}`);
  };

  const handleAnswer = () => {
    setIsClicked(true);
    setClickButton(!clickButton);
  };

  const glassList = [glassImage0, glassImage2, glassImage4, glassImage6];

  const answerList = [
    [SafeImg, DishImg, SojuImg, PhoneImg],
    [walletImg, MenuImg, ClockImg, HandImg],
    [ExamImg, XImg, PlanImg, HomeImg],
    [RegretImg, TaxiImg, LipsImg, LoveImg],
  ];

  const answer = answerList[pageNum].map((imgSrc, index) => (
    <StyledAnswer key={index} src={imgSrc} onClick={handleAnswer} />
  ));

  return (
    <StyledBackGround>
      <Header pageId={page.id} />
      <img className="glass" src={glassList[pageNum]} alt="글래스 이미지" />
      <img src={questionImg} className="questionBackGround" alt="질문 백그라운드" />
      <StyledQuestion>상대방에게 건네고 싶은 것은?</StyledQuestion>
      <StyledAnswerContainer>{answer}</StyledAnswerContainer>
      <Button className="button" text="두잔 더!" enabled={isClicked} onClick={handleButton} />
    </StyledBackGround>
  );
}

const StyledBackGround = styled.div`
  background-color: #32322e;
  height: 100vh;
  text-align: center;
  & > img.glass {
    display: block;
    margin: 0 auto;

    margin-top: 29px;
  }
  & > .questionBackGround {
    display: block;
    margin: 0 auto;

    margin-top: 58px;
  }
`;

const StyledQuestion = styled.h1`
  display: block;
  margin: 0 auto;
  position: relative;
  top: -30px;
`;

const StyledAnswerContainer = styled.div`
  display: block;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  width: 342px;

  margin-bottom: 10px;
`;

const StyledAnswer = styled.img`
  cursor: pointer;
`;

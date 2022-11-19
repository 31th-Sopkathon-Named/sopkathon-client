import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Background from '../assets/images/result-background.png';
import TitleBackground from '../assets/images/result-title.png';

export default function Result() {
  const [order, setOrder] = useState(0);
  const data = [
    {
      giveRate: 1,
      receiveRate: 5,
      question: '지금 당신에게 가장 중요한 것은?',
      result: 1, // 찐친
    },
    {
      giveRate: 2,
      receiveRate: 6,
      question: '상대에게 건네고 싶은 것은?',
      result: 2, // 아수라
    },
    {
      giveRate: 3,
      receiveRate: 7,
      question: '상대에게 낱낱이 알려주고 싶은 것은?',
      result: 3, // 연인
    },
    {
      giveRate: 4,
      receiveRate: 3,
      question: '2병을 거의 다 마시니 눈에 들어오는 것은?',
      result: 1, // 찐친
    },
  ];

  useEffect(() => {
    if (order > 0) {
      document.getElementById('card' + order).children[0].src =
        document.getElementById('card' + order).children[0].src.substring(0, 34) + '-clicked.png';
      document.getElementById('card' + order).children[0].style.opacity = 1;
      document.getElementById('my' + order).children[0].src =
        document.getElementById('my' + order).children[0].src.substring(0, 34) + '-clicked.png';
      document.getElementById('my' + order).children[0].style.opacity = 1;
    }
  }, [order]);

  const handleClickCard = (e) => {
    setOrder(e.currentTarget.id.substring(4));
  };
  return (
    <StyledContainer>
      <img src={Background} />
      <StyledQuestion>
        <img src={TitleBackground} />
        {order === 0 ? '현규와 해린의 변화한 관계는?' : data[order - 1].question}
      </StyledQuestion>
      <StyledCards>
        {data.map((card, index) => (
          <StyledCard key={index} onClick={handleClickCard} id={'card' + (index + 1)}>
            <img src={`result-rate${card.giveRate}.png`} />
          </StyledCard>
        ))}
      </StyledCards>
      <StyledCards>
        {data.map((card, index) => (
          <StyledCard key={index} onClick={handleClickCard} id={'my' + (index + 1)}>
            <img src={`result-rate${card.receiveRate}.png`} />
          </StyledCard>
        ))}
      </StyledCards>
      {order === 0 ? (
        <StyledProgress0>
          <img src="result-progress0.png" />
        </StyledProgress0>
      ) : (
        <StyledProgress>
          <span>소주 {order * 2 + 2} 잔</span>마셨을 때의 둘 사이는...
        </StyledProgress>
      )}
      <StyledResult>
        {order === 0 ? (
          <Img src="result-box0.png" />
        ) : (
          <img src={`result-box${data[order - 1].result}.png`} />
        )}
      </StyledResult>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding-top: 56px;
  width: 100%;
  height: 100%;

  > img {
    left: 0px;
    top: 0px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -20;
  }
`;

const StyledQuestion = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  > img {
    position: absolute;
    width: 420px;
    height: 48px;
    z-index: -10;
  }
`;

const StyledCards = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  perspective: 1100px;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 76px;

  margin: 3px;

  cursor: pointer;

  > img {
    width: 80px;
    height: 76px;
    opacity: 0.3;
  }
`;

const StyledProgress0 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
  margin-left: 36px;
  margin-right: 40px;
  margin-top: 8px;

  > img {
    width: 300px;
  }
`;

const StyledProgress = styled.h1`
  text-align: center;
  margin-top: 61px;
  margin-bottom: 21px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: white;

  > span {
    color: rgba(255, 121, 112, 1);
    margin-right: 4px;
  }
`;

const StyledResult = styled.footer`
  display: flex;
  justify-content: center;

  > img {
    width: 330.5px;
  }
`;

const Img = styled.img`
  margin-bottom: 7px;
`;

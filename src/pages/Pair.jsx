import React from 'react';
import styled from 'styled-components';

import icon_hand from '../assets/images/hand.png';

export default function My() {
  return (
    <div>
      <Wrapper>
        <ClockWrapper>
          <IconHand src={icon_hand} alt="clock" />
        </ClockWrapper>
        <InputBox>
          <p>상대의 닉네임을 입력해서 2H를 시작하세요</p>
          <MyNickName placeholder="상대방 닉네임" />
          <MyNum placeholder="전화번호 뒷자리" />
        </InputBox>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  border: solid 1px black;
  height: 844px;
  width: 390px;
  text-align: center;
  background-color: black;
  margin: 0 auto;

  p {
    color: #ffffff;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 19px;
  }
`;
const IconHand = styled.img`
  height: 202px;
  width: 180px;
  margin-top: 125px;
`;
const ClockWrapper = styled.div``;
const MyNickName = styled.input`
  width: 234px;
  display: block;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 10px;
`;
const MyNum = styled.input`
  width: 234px;
  display: block;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 10px;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

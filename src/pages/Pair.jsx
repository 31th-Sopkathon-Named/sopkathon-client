import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { matchAPI } from '../core/api/userAPI';

import Button from '../components/common/Button';
import icon_hand from '../assets/images/hand.png';

export default function My() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const handleNickNameInput = (e) => {
    setNickName(e.target.value);
  };
  const handlePhoneNumInput = (e) => {
    setPhoneNum(e.target.value);
  };

  const handleClickConnectButton = () => {
    matchAPI(nickName, phoneNum);
    navigate('/question/1');
  };
  return (
    <div>
      <Wrapper>
        <ClockWrapper>
          <IconHand src={icon_hand} alt="clock" />
        </ClockWrapper>
        <InputBox>
          <p>상대의 닉네임을 입력해서 2H를 시작하세요</p>
          <MyNickName onChange={handleNickNameInput} placeholder="상대방 닉네임" />
          <MyNum onChange={handlePhoneNumInput} placeholder="전화번호 뒷자리" />
        </InputBox>
        <Button text="연결하기" enabled={true} onClick={handleClickConnectButton} />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  border: solid 1px black;
  height: 100vh;
  text-align: center;
  background-color: #32322e;
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
  margin-bottom: 20px;
`;

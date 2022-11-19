import axios from 'axios';

export const userAPI = async (nickName, phoneNum) => {
  try {
    const res = await axios.post('/user', {
      nickName: nickName,
      phoneNum: phoneNum,
    });
    sessionStorage.setItem('myName', nickName);
    sessionStorage.setItem('toId', res.data.data.myId);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const matchAPI = async (nickName, phoneNum) => {
  try {
    const res = await axios.post('/user/match', {
      nickName: nickName,
      phoneNum: phoneNum,
    });
    sessionStorage.setItem('pairName', nickName);
    sessionStorage.setItem('fromId', res.data.data.toId);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const evaluateAPI = async (toId, fromId, rate) => {
  try {
    const res = await axios.post('/evaluation', {
      toId: toId,
      fromId: fromId,
      rate: rate,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

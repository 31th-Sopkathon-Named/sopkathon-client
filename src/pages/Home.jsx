import React, { useEffect } from 'react';
import { userAPI, matchAPI, evaluateAPI } from '../core/api/userAPI';

export default function Home() {
  useEffect(() => {
    userAPI('Yoo', 8921);
    matchAPI('Wook', 1234);
    evaluateAPI(sessionStorage.getItem('toId'), sessionStorage.getItem('fromId'), [1, 2, 3, 4]);
  }, []);
  return <div></div>;
}

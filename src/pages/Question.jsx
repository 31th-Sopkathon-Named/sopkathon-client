import React from 'react';
import { useRecoilState } from 'recoil';

import { selectAryState } from '../core/recoil/selectAryState';

export default function Question() {
  const [selectList, setSelectList] = useRecoilState(selectAryState);
  console.log(selectList, setSelectList);
  return <div></div>;
}

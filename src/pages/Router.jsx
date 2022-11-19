// 라이브러리 import
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 컴포넌트 import
import Home from './Home';
import My from './My';
import Pair from './Pair';
import Question from './Question';
import Guide from './Guide';
import Result from './Result';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my" element={<My />} />
        <Route path="/pair" element={<Pair />} />
        <Route path="/question/:id" element={<Question />} />
        <Route path="/guide/:id" element={<Guide />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

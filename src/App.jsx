import { useState } from 'react';
import BackgroundImage from './BackgroundImage';
import ContentsBox from './ContentsBox';
import './input.css';

function App() {
  return (
    <>
    <div className="relative flex justify-center items-center h-screen">
      <BackgroundImage/>
      <ContentsBox/>
    </div>
    </>
  );
}

export default App

import { useState } from 'react';
import BackgroundImage from './Components/BackgroundImage';
import ContentsBox from './Components/ContentsBox';
import './input.css';
import { BrowserRouter as Router } from "react-router-dom";
import LoginModal from './Components/LoginModal';

function App() {
  return (
    <Router>
      <div className="relative flex justify-center items-center h-screen">
          <BackgroundImage/>
          <ContentsBox/>
          <LoginModal/>
      </div>
    </Router>
);
}

export default App

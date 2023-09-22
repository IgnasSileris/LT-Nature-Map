import { useState } from 'react';
import BackgroundImage from './Components/BackgroundImage';
import ContentsBox from './Components/ContentsBox';
import './input.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="relative flex justify-center items-center h-screen">
          <BackgroundImage/>
          <ContentsBox/>
      </div>
    </Router>
);
}

export default App

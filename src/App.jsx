import { useState } from 'react';
import BackgroundImage from './Components/BackgroundImage';
import ContentsBox from './Components/ContentsBox';
import './input.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="relative flex justify-center items-center h-screen">
        <BackgroundImage/>
        <ContentsBox/>
    </div>
);
}

export default App

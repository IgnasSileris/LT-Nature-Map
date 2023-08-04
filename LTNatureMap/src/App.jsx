import { useState } from 'react';
import BackgroundImage from './BackgroundImage';
import ContentsBox from './ContentsBox';
import DisplaySelection from './DisplaySelection';
import SelectionBar from './SelectionBar';
import LTMap from './LTMap';
import './input.css';


function App() {
  return (
    <>
    <div className="relative flex justify-center items-center h-screen">
      <BackgroundImage/>
      <ContentsBox>
        <SelectionBar>
          <DisplaySelection text="Map"/>
          <DisplaySelection text="Feed"/>
          <DisplaySelection text="Ranking"/>
        </SelectionBar>
        <LTMap/>
      </ContentsBox>
    </div>
    </>
  );
}

export default App

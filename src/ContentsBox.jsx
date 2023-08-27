import React from 'react';
import DisplaySelection from './DisplaySelection';
import TimeframeSelection from './TimeframeSelection';
import LTMap from './LTMap';
import AddPost from './AddPost';
import LoginSignupBar from './LoginSignupBar';

function ContentsBox() {
    return (
        <div className="absolute w-4/6 h-5/6 bg-slate-100 bg-opacity-90 rounded-xl shadow-lg p-10">
            <div className="flex flex-row w-full h-full border-2 border-solid border-orange-600 p-2 gap-2">
                <div className="flex flex-col border-2 border-solid border-blue-600 gap-0.5" style={{width: '70%', height: '100%'}}>
                    <div className="flex flex-wrap justify-between items-end border-2 border-solid border-red-600" style={{width: '100%', height: '10%'}}>
                        <DisplaySelection/>
                        <TimeframeSelection/>
                    </div>
                    <div className="border-2 border-solid border-red-600" style={{width: '100%', height: '90%'}}>
                        <LTMap/>
                    </div>
                </div>
                <div className="flex flex-col border-2 border-solid border-blue-600" style={{width: '30%', height: '100%'}}>
                    <div className="flex flex-wrap justify-end items-start border-2 border-solid border-red-600" style={{width: '100%', height: '10%'}}>
                        <LoginSignupBar/>
                    </div>
                    <div className="flex flex-wrap justify-center items-center border-2 border-solid border-red-600" style={{width: '100%', height: '90%'}}>
                        <AddPost/>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default ContentsBox;
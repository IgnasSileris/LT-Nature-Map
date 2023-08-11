import React from 'react';
import DisplaySelection from './DisplaySelection';
import TimeframeSelection from './TimeframeSelection';
import LTMap from './LTMap';
import AddPost from './AddPost';

function ContentsBox() {
    return (
        <div className="absolute w-4/6 h-5/6 bg-slate-100 bg-opacity-90 rounded-xl shadow-lg">
            <div className="relative w-full h-full p-12">
                <DisplaySelection/>
                <TimeframeSelection/>
                <LTMap/>
                <AddPost/>
            </div>
        </div>
    );
}

export default ContentsBox;
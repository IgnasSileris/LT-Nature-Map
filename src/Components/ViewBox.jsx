import React from 'react';
import FeedView from './FeedView';
import { Routes, Route} from 'react-router-dom';


function ViewBox() {
    return (
        <div className="flex border bg-white justify-center items-center" style={{width: '100%', height: '90%'}}>
            <FeedView/>
        </div>
    );
}

export default ViewBox;
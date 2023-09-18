import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTimeframeView } from '../reducers/timeframeViewReducer';

function TimeframeSelection() {
    const timeframeView = useSelector((state) => state.timeframeView);
    const dispatch = useDispatch();

    return (
        <div className="flex-initial">
            <button title="Today" className="border-x border-black px-1 hover:bg-gray-300" onClick={() => dispatch(setTimeframeView('1D'))}>
                1D
            </button>
            <button title="Past week" className="border-r border-black px-1 hover:bg-gray-300" onClick={() => dispatch(setTimeframeView('1W'))}>
                1W
            </button>
            <button title="Past month" className="border-r border-black px-1 hover:bg-gray-300" onClick={() => dispatch(setTimeframeView('1M'))}>
                1M
            </button>
            <button title="Past 6 months" className="border-r border-black px-1 hover:bg-gray-300" onClick={() => dispatch(setTimeframeView('6M'))}>
                6M
            </button>
            <button title="Past year" className="border-r border-black px-1 hover:bg-gray-300" onClick={() => dispatch(setTimeframeView('1Y'))}>
                1Y
            </button>
            <button title="All-time" className="border-r border-black px-1 hover:bg-gray-300" onClick={() => dispatch(setTimeframeView('Max'))}>
                Max
            </button>
                        
        </div>
    );
}

export default TimeframeSelection;
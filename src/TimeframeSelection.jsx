import React from 'react';

function TimeframeSelection() {
    return (
        <div className="absolute top-1/8 left-0 justify-center align-middle contents">
            <button className="border-x border-black p-1 hover:bg-gray-300">
                1D
            </button>
            <button className="border-r border-black p-1 hover:bg-gray-300">
                1W
            </button>
            <button className="border-r border-black p-1 hover:bg-gray-300">
                1M
            </button>
            <button className="border-r border-black p-1 hover:bg-gray-300">
                6M
            </button>
            <button className="border-r border-black p-1 hover:bg-gray-300">
                1Y
            </button>
            <button className="border-r border-black p-1 hover:bg-gray-300">
                Max
            </button>
                        
        </div>
    );
}

export default TimeframeSelection;
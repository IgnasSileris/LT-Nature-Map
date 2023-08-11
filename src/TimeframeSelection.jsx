import React from 'react';

function TimeframeSelection() {
    return (
        <div className="absolute" style= {{left: '55%', top: '9%'}}>
            <button title="Today" className="border-x border-black px-1 hover:bg-gray-300">
                1D
            </button>
            <button title="Past week" className="border-r border-black px-1 hover:bg-gray-300">
                1W
            </button>
            <button title="Past month" className="border-r border-black px-1 hover:bg-gray-300">
                1M
            </button>
            <button title="Past 6 months" className="border-r border-black px-1 hover:bg-gray-300">
                6M
            </button>
            <button title="Past year" className="border-r border-black px-1 hover:bg-gray-300">
                1Y
            </button>
            <button title="All-time" className="border-r border-black px-1 hover:bg-gray-300">
                Max
            </button>
                        
        </div>
    );
}

export default TimeframeSelection;
import React from 'react';

function DisplaySelection() {
    return (
        <div className="absolute top-0 left-0 justify-center align-middle contents">
            <button className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md">
                Map
            </button>
            <button className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md">
                Feed
            </button>
            <button className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md">
                Ranking
            </button>
        </div>
    );
}
export default DisplaySelection;
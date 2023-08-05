import React from 'react';

function DisplaySelection( {text, onClick} ) {
    return (
        <button className="border-solid border bg-rose-400 p-3">
            <text>
                {text}
            </text>
        </button>
        
    );
}
export default DisplaySelection;
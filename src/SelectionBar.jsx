import React from 'react';

function SelectionBar( {children}) {
    return (
        <div className="justify-center align-middle contents">
            {children}
        </div>
    );
}

export default SelectionBar;
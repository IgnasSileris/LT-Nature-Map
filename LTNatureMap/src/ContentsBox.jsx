import React from 'react';

function ContentsBox( {children} ) {
    return (
        <div className="absolute top-1/8 left-1/8 w-4/6 h-5/6 bg-slate-100 bg-opacity-90 rounded-xl p-12 shadow-lg">
            {children}
        </div>
    );
}

export default ContentsBox;
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faBars, faRankingStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setDisplayMode } from '../reducers/displayModeReducer';


function DisplaySelection() {
    const displayMode = useSelector((state) => state.displayMode);
    const dispatch = useDispatch();

    return (
        <div className="flex-initial">
            <button title="Switch to map view" className={"border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md"} onClick={() => dispatch(setDisplayMode('Map'))}>
                <FontAwesomeIcon icon={faMap} className="w-4 h-4" />
                <span> Map</span>
            </button>
            <button title="Switch to feed view" className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md" onClick={() => dispatch(setDisplayMode('Feed'))}>
                <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
                <span> Feed</span>
            </button>
            <button title="Switch to rankings and leaderboards" className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md" onClick={() => dispatch(setDisplayMode('Rankings'))}>
                <FontAwesomeIcon icon={faRankingStar} className="w-4 h-4" />
                <span> Rankings</span>
            </button>
            <button title="Search for posts or authors" className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md" onClick={() => dispatch(setDisplayMode('Search'))}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" />
                <span> Search</span>
            </button>
        </div>
    );
}
export default DisplaySelection;
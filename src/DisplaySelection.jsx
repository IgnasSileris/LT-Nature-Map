import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faBars, faRankingStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function DisplaySelection() {
    return (
        <div className="absolute">
            <button title="Switch to map view" className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md">
                <FontAwesomeIcon icon={faMap} className="w-4 h-4" />
                <span> Map</span>
            </button>
            <button title="Switch to feed view" className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md">
                <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
                <span> Feed</span>
            </button>
            <button title="Switch the rankings" className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md">
                <FontAwesomeIcon icon={faRankingStar} className="w-4 h-4" />
                <span> Rankings</span>
            </button>
            <button title="Search for posts or authors" className="border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" />
                <span> Search</span>
            </button>
        </div>
    );
}
export default DisplaySelection;
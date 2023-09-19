import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faBars, faRankingStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { setDisplayMode } from '../reducers/displayModeReducer';

function SelectionButton(props) {
    const displayMode = useSelector((state) => state.displayMode);
    const dispatch = useDispatch();

    const bgColor = displayMode === props.name ? 'relative border-solid border bg-rose-500 p-3 rounded-md' : 'relative border-solid border bg-rose-400 hover:bg-rose-500 p-3 rounded-md';

    return (
        <button title={props.title} className={bgColor} onClick={() => dispatch(setDisplayMode(props.name))}>
            <FontAwesomeIcon icon={props.icon} className="w-4 h-4" />
            <span> {props.name}</span>
            {displayMode === props.name && (<div className="absolute left-0 bottom-0 bg-black opacity-60 w-full h-1 rounded-xl"></div>)}
        </button>
    );
}
function DisplaySelection() {
    return (
        <div className="flex-initial">
            <SelectionButton name = "Map" title = "Switch to map view" icon = {faMap}/>
            <SelectionButton name = "Feed" title = "Switch to feed view" icon = {faBars}/>
            <SelectionButton name = "Rankings" title = "Switch to rankings and leaderboards" icon = {faRankingStar}/>
            <SelectionButton name = "Search" title = "Search for posts or authors" icon = {faMagnifyingGlass}/>
        </div>
    );
}

export default DisplaySelection;
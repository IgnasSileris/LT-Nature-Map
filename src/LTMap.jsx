import React from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css"

const LTCenter = [55.1694, 23.8813];

function LTMap() {
    return (
        <div className="absolute top-1/8 left-1/8 w-4/6 h-4/5 border-2 bg-slate-100 ">
            <MapContainer center={LTCenter} zoom={7} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            </MapContainer>
        </div>
    );
}

export default LTMap;
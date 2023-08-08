import React from 'react';
import {MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import LTBoundary from "../Extras/LT-Borders.json";

const LTCenter = [55.1694, 23.8813];
const maxBounds = [
    [ 53.85, 20.5],
    [ 56.5, 26.9],
];
function LTMap() {
    return (
        <div className="absolute top-1/8 left-1/8 w-4/6 h-4/5 border-2 bg-slate-100 ">
            <MapContainer center={LTCenter} zoomSnap = {0.5} zoom={7.5} minZoom={7.5} maxBounds={maxBounds} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
                <GeoJSON data={LTBoundary} style={{ fillColor: 'green', color: 'green', weight: 2 }} />
            </MapContainer>
        </div>
    );
}

export default LTMap;
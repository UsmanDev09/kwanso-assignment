import React from 'react';
import { MapContainer, Marker,TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const position: [number, number] = [latitude, longitude];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ width: '100%', height: '600px' }}
    >
       <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Latitude: {latitude} <br />
            Longitude: {longitude}
          </Popup>
        </Marker>
    </MapContainer>
  );
};

export default Map;
